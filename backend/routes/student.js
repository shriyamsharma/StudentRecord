const express = require('express');
const router = express.Router();
let Student = require('../models/student');

// router.get('/', (req, res) => {
//     Student.find()
//     .then(student => res.status(200).json(student))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.get('/', paginatedResults(Student), (req, res) => {
    res.json(res.paginatedResults);
});

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const results = {};
    
        if(endIndex < model.countDocuments()) {       
            results.next = {
                page:  page + 1,
                limit: limit
            }
        }
    
        if(startIndex > 0) {
            results.previous = {
                page:  page - 1,
                limit: limit
            }
        }

        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec();
            res.paginatedResults = results;
            next();
        } catch (err) {
            res.status(500).json({ message: err.message })
        }

    }
}

router.post('/add', (req, res) => {
    const admission = Number(req.body.admission);
    const name = req.body.name;
    const studentclass = req.body.studentclass;
    const section = req.body.section;
    const rollno = Number(req.body.rollno);
    const dob = Date.parse(req.body.dob);
    const email = req.body.email;
    const password = req.body.password;

    const newStudent = new Student({
        admission,
        name,
        studentclass,
        section,
        rollno,
        dob,
        email,
        password
    });

    newStudent.save() 
    .then(() => res.json('Student added'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;