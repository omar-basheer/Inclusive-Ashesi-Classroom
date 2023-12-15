import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudentCourseData } from '../services/services';
import "../styles/global.css"
import "../styles/course_tray.css"
import CircularProgress from '@mui/joy/CircularProgress';

// import { useAuth } from '../pages/auth/AuthProvider';


/**
 * CourseTray component displays a tray containing a list of courses.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.closeTray - The function to close the tray.
 * @returns {JSX.Element} The CourseTray component.
 */
function CourseTray({ closeTray }) {
    const [courses, setCourses] = useState([]);
    const student_id = JSON.parse(localStorage.getItem('student_id'))
    const token = JSON.parse(localStorage.getItem('token'))
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudentCourseData(student_id, token, setCourses)
            .then(() => setLoading(false)) // Set loading to false when courses are fetched
            .catch(() => setLoading(false));
    }, [student_id, token]);

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
                                        {loading ? (
                                            <div className='circular-progress-container'>
                                                <CircularProgress color="neutral"/>
                                            </div>
                                        ) : (<>
                                            <ul className='block-list'>
                                                {courses.map(course => (
                                                    <li className='list-item' key={course.course_id} onClick={handleCourseLinkClick}>
                                                        <Link to={`/${course.course_id}`} className='view-link'>{`[${course.course_id}] - ${course.course_name}`}</Link>
                                                        <div className='subtext'>23-24-SEM1</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>)}
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