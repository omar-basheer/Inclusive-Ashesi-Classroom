import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import { useAuth } from './auth/AuthContext';
import '../styles/global.css'
import '../styles/courses.css'
import Sidemenu from "../components/Sidemenu";
import ToDo from "../components/ToDo";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";

function Course() {
    const { courseID } = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    const [homeContent, setHomeContent] = useState('');

    console.log(courseID)

    const fetchCourseData = async (courseId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/courses/${courseId}/`);
            const data = await response.json();

            setCourseTitle(`[${data.course_id}] - ${data.course_name}`);
            setHomeContent(data.course_description); 
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };
    
    useEffect(() => {
        fetchCourseData(courseID);
    }, [courseID]);

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu 
                    courseID={courseID}
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