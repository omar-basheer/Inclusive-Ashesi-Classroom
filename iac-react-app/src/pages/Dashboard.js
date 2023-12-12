import '../styles/global.css'
import '../styles/courses.css'
import React, { useContext, useEffect, useState } from "react";
import Sidemenu from "../components/Sidemenu";
import ToDo from "../components/ToDo";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";
import { AuthContext } from "./auth/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { fetchStudentData } from '../services/services';

// Dashboard page
/**
 * Represents the Dashboard component.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
function Dashboard() {
    const student_id = JSON.parse(localStorage.getItem('student_id'))
    const token = JSON.parse(localStorage.getItem('token'))
    const [info, setInfo] = useState("")

    // Redirect to login page if not logged in
    if (token == null){    
        window.history.replaceState(null, '', '/Login');
        window.location.reload();
    }
    // Fetch student data
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/students/get/${student_id}/`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + token
                    },
                })
                // If the response is not 200 OK, print error message
                if (!response.ok) {
                    console.log("student fetch error: failed to fetch student data")
                    return
                }
                const data = await response.json();
                setInfo(data);
                // Save student data to local storage
                localStorage.setItem('info', JSON.stringify(info));
                console.log(info)
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

		fetchStudentData(student_id, token, info, setInfo);
	}, [student_id, token, info]);

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent
                                contentTitle={info ? `${info.first_name} ${info.last_name}'s dashboard` : 'Loading...'}
                            />
                        </div>
                    </div>
                    {/* <div className="iac-main-right-side-wrapper">
                        <RightSide />
                    </div> */}
				</div>
			</div>
		</div>
	)
}

export default Dashboard