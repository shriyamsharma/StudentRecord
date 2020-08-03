import React from 'react'

export default function StudentList({ students }) {
    return (
         students.map(s => {
             <div key={s._id}>
                 s.map()
             </div>
         })
        <div key={s._id} >
            s.map(p => {
                <div key={p}>
                    {console.log(p._id)}
                </div>
            })
        </div>
    )
}





// const singleStudent = (props) => (
//     <tr>
//         <td>{props.studentsDetail.admission}</td>
//         <td>{props.studentsDetail.rollno}</td>
//         <td>{props.studentsDetail.name}</td>
//         <td>{props.studentsDetail.studentclass}</td>
//         <td>{props.studentsDetail.section}</td>
//         <td>{props.studentsDetail.dob.substring(0,10)}</td>
//         <td>{props.studentsDetail.email}</td>
//         <td>{props.studentsDetail.password}</td>
//     </tr>
// );

// export default singleStudent;