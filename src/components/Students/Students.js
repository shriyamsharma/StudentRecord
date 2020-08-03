import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Students.module.css';
import StudentList from './StudentList/StudentList';
// import Pagination from '../Pagination';

function Students () {
    
    const [students, setStudents] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("http://localhost:5000/?page=1&limit=10")
    // const [nextPageUrl, setNextPageUrl] = useState()
    // const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        setLoading(true)
        let cancel 
        axios.get(currentPageUrl, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(res => {
          setLoading(false)
        //   setNextPageUrl(res.data.next)
        //   setPrevPageUrl(res.data.previous)
          setStudents(res.data.results)
        })
        //for clean up the last call if break connection
        return () => cancel()
      }, [currentPageUrl])

    // function gotoNextPage() {
    // setCurrentPageUrl(nextPageUrl)
    // }

    // function gotoPrevPage() {
    // setCurrentPageUrl(prevPageUrl)
    // }

    if(loading) return "Loading.."

    return (
        <div className={styles.Students}>
            <h1>Students Records</h1>
            <table className="table">
                <thead className="thead-light">
                        <tr>
                            <th>AdmnNo</th>
                            <th>RollNo</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                </thead>
                <tbody>
                    <StudentList students={students} />
                    {/* {console.log(students)} */}
                </tbody>
            </table>
            {/* <Pagination  
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            /> */}
        </div>
    );
}

export default Students;