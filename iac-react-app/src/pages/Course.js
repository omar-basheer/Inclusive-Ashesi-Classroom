import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './auth/AuthProvider';
import '../styles/global.css'
import '../styles/courses.css'
import Sidemenu from "../components/Sidemenu";
import ToDo from "../components/ToDo";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";
import { fetchCourseData } from '../services/services';

// Course page
/**
 * Represents a Course component.
 * @returns {JSX.Element} The Course component.
 */
function Course() {
    const token = JSON.parse(localStorage.getItem('token'))
    const { course_id } = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    const [homeContent, setHomeContent] = useState('');

    console.log(course_id)
    if (token === null) {
        window.history.replaceState(null, '', '/Login');
        window.location.reload();
    }

    useEffect(() => {
        fetchCourseData(course_id, token, setCourseTitle, setHomeContent);
    }, [course_id]);

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu
                        course_id={course_id}
                    />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent
                                contentTitle={courseTitle}
                                richContent={homeContent}
                            />
                        </div>
                    </div>
                    <div className="iac-main-right-side-wrapper">
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course