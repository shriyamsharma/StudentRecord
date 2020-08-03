const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    admission: {
        type: Number,
        required: true,
        unique: true,
    },
    name: { 
        type: String, 
        required: true 
    },
    studentclass: { 
        type: String, 
        required: true 
    },
    section: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
    }, 
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;