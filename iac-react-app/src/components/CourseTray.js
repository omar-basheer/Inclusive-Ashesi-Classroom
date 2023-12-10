import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCourseData } from '../services/user_courses';
import "../styles/global.css"
import "../styles/course_tray.css"
// import { useAuth } from '../pages/auth/AuthProvider';


function CourseTray({closeTray }) {
    const [courses, setCourses] = useState([]);
    const student_id = JSON.parse(localStorage.getItem('student_id'))
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/students/courses/${student_id}/`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + token
                    },
                })
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchData();
    }, []);

    const handleCourseLinkClick = () => {
        closeTray();
    }
    return (
        <div className='navtray-portal'>
            <span className='tray'>
                <div className='course-tray'>
                    <div className='tray-content'>
                        <span className='close-button'>
                            <button className='base-button'>
                                <span className='base-button-content'>
                                    <span className='base-button-children'>
                                        <span className='button-isolate'>
                                            <span className='base-button-icon'>
                                                <svg className='svgIcon' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.64428 6.21563L0.873047 9.98686L2.44439 11.5582L6.21563 7.78697L9.98686 11.5582L11.5582 9.98686L7.78697 6.21563L11.5582 2.44439L9.98686 0.873047L6.21563 4.64428L2.44439 0.873047L0.873047 2.44439L4.64428 6.21563Z" fill="black" />
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </span>
                        <div className='tray-space'>
                            <div className='view'>
                                <h2 className='view-heading'>Courses</h2>
                                <hr></hr>
                                <ul className='block-list'>
                                    <li className='list-item'>
                                        <a className='view-link'>All courses</a>
                                    </li>
                                    <li className='list-item'><hr></hr></li>
                                    <li className='list-item'>
                                        <ul className='block-list'>
                                            {courses.map(course => (
                                                <li className='list-item' key={course.course_id} onClick={handleCourseLinkClick}>
                                                    <Link to={`/${course.course_id}`} className='view-link'>{`[${course.course_id}] - ${course.course_name}`}</Link>
                                                    <div className='subtext'>23-24-SEM1</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                                <br></br>
                                <div className='bottom-text'>Welcome to your courses! To customise the list of courses, click on the "All Courses" link and star the courses to display.</div>

                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    )
}


export default CourseTray