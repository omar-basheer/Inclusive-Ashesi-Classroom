import React from "react";
import '../styles/global.css'
import '../styles/right_side.css'
import '../styles/preferences.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";
import { useState, useEffect} from 'react';
import AutoAidOption from "../components/AutoAidOption";
import ProfileEdit from "../components/ProfileEdit";
// import { useAuth } from "./auth/AuthProvider";

function Preferences() {

    const token = JSON.parse(localStorage.getItem('token'))
    if (token == null){    // Replace the entire history with the login page path
        window.history.replaceState(null, '', '/');
        window.location.reload();}
    const student_id = JSON.parse(localStorage.getItem('student_id'))
    const [info, setInfo] = useState("")
    console.log(token)
    console.log(student_id)

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
                if (!response.ok) {
                    console.log("student fetch error: failed to fetch student data")
                    return
                }
                const data = await response.json();
                setInfo(data);
                localStorage.setItem('info', JSON.stringify(info));
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [ student_id, token, info]);

    const Title = "System Preferences"
    // const {userInfo} = useAuth()

    const [expandedState, setExpandedState] = useState(new Array(4).fill(false));
    const [arrowDirection, setArrowDirection] = useState(new Array(4).fill("down"));
    const [isSwitched, setIsSwitched] = useState(new Array(4).fill(false));

    const handleExpandToggleClick = (index) => {
        const newExpandedState = [...expandedState];
        newExpandedState[index] = !newExpandedState[index];
        setExpandedState(newExpandedState);

        const newArrowDirection = newExpandedState[index] ? "up" : "down";
        const updatedArrowDirection = [...arrowDirection];
        updatedArrowDirection[index] = newArrowDirection;
        setArrowDirection(updatedArrowDirection);
    }

    const handleAccessibilitySwitch = (index) => {
        const newIsSwitched = [...isSwitched];
        newIsSwitched[index] = !newIsSwitched[index];
        setIsSwitched(newIsSwitched);
    };

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    {/* <Sidemenu /> */}
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <h2>My Profile</h2>
                            <br></br>
                            <a className="avatar-profile"></a>
                            {/* <h1 className="user-profile">{userInfo ? `${info.first_name}, ${info.last_name}'s Settings` : 'Loading...'}</h1> */}
                            <form className="profile-form">
                                {/* hard coded user settings */}
                                <table className="profile-table">
                                    <tr>
                                        <th>
                                            <label className="profile-table-info">Full name:</label>
                                        </th>
                                        <td className="table-td">
                                            {/* <span >{userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : 'Loading...'}</span> */}
                                            <span >{info.first_name} {info.last_name}</span>
                                            <span className="profile-table-description">
                                                <br></br>
                                                This name will be used for grading
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label className="profile-table-info">Display name:</label>
                                        </th>
                                        <td className="table-td">
                                            <span >{info.first_name} {info.last_name}</span>
                                            <span className="profile-table-description">
                                                <br></br>
                                                People will see this name in discussions, messages and comments.
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label className="profile-table-info">Sortable name:</label>
                                        </th>
                                        <td className="table-td">
                                            <span >{info.last_name}, {info.first_name}</span>
                                            <span className="profile-table-description">
                                                <br></br>
                                                This name appears in sorted lists.
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label className="profile-table-info">Language:</label>
                                        </th>
                                        <td className="table-td">
                                            <span >System default (English (United Kingdom))</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label className="profile-table-info">Timezone:</label>
                                        </th>
                                        <td className="table-td">
                                            <span >Monrovia</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            {/* <label className="profile-table-info">Timezone:</label> */}
                                        </th>
                                        <td className="table-td">
                                            <span style={{ display: 'block' }}>Maintenance windows: 1st and 3rd Thursday of the month from 0:05 to 2:05 (Thursday from 0:05 to 2:05 UTC )
                                                Next window: Thu, 7 Dec 2023 from 0:05 to 2:05
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            {/* <label className="profile-table-info">Timezone:</label> */}
                                        </th>
                                        <td className="table-td">
                                            <span >Maintenance windows begin July 2021. For details please see the release notes</span>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                            <br></br>
                            <br></br>
                            <h2>Feature options</h2>
                            <div className="feature-flag-wrapper">
                                <div className="feature-options-container">
                                    {/* <span className=""></span> */}
                                    {/* <h2 className="user">User</h2> */}
                                    <table className="feature-table">
                                        <thead className="tHead">
                                            <th className="colHeader" style={{ width: '50%' }}>Feature</th>
                                            <th className="colHeader" style={{ width: '50%' }}>Status</th>
                                            <th className="colHeader">State</th>
                                        </thead>
                                        <tbody className="tBody">
                                            <AutoAidOption 
                                            summary={"Auto Show Closed Captions"}
                                            expandableText={"Automatically show closed captions in the user's current language (if available) when playing canvas media."}
                                            expanded={expandedState[0]}
                                            arrowDirection={arrowDirection[0]}
                                            handleExpandToggleClick={() => handleExpandToggleClick(0)}
                                            isSwitched={isSwitched[0]}
                                            handleAccessibilitySwitch={() => handleAccessibilitySwitch(0)}
                                            />
                                            <AutoAidOption 
                                            summary={"Set Font Properties"}
                                            expandableText={"Automatically show closed captions in the user's current language (if available) when playing canvas media."}
                                            expanded={expandedState[1]}
                                            arrowDirection={arrowDirection[1]}
                                            handleExpandToggleClick={() => handleExpandToggleClick(1)}
                                            isSwitched={isSwitched[1]}
                                            handleAccessibilitySwitch={() => handleAccessibilitySwitch(1)}
                                            />
                                            <AutoAidOption 
                                            summary={"Auto Play Text-to-Speech"}
                                            expandableText={"Automatically show closed captions in the user's current language (if available) when playing canvas media."}
                                            expanded={expandedState[2]}
                                            arrowDirection={arrowDirection[2]}
                                            handleExpandToggleClick={() => handleExpandToggleClick(2)}
                                            isSwitched={isSwitched[2]}
                                            handleAccessibilitySwitch={() => handleAccessibilitySwitch(2)}
                                            />
                                            <AutoAidOption 
                                            summary={"Automatic Lesson Summarizer"}
                                            expandableText={"Automatically generate AI summaries of chosen canvas documents."}
                                            expanded={expandedState[3]}
                                            arrowDirection={arrowDirection[3]}
                                            handleExpandToggleClick={() => handleExpandToggleClick(3)}
                                            isSwitched={isSwitched[3]}
                                            handleAccessibilitySwitch={() => handleAccessibilitySwitch(3)}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iac-main-right-side-wrapper">
                        <ProfileEdit/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preferences