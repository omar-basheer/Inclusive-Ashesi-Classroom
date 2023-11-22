import React from "react";
import '../styles/global.css'
import '../styles/right_side.css'
import '../styles/preferences.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";
import { useState } from 'react';

function SysPref() {
    const Title = "System Preferences"

    const [expandedState, setExpandedState] = useState(new Array(4).fill(false));
    const [arrowDirection, setArrowDirection] = useState(new Array(4).fill("down"));

    const handleToggleClick = (index) => {
        // Toggle the expanded state for the specific index when the button is clicked
        const newExpandedState = [...expandedState];
        newExpandedState[index] = !newExpandedState[index];
        setExpandedState(newExpandedState);

        // Update the arrow direction based on the expanded state
        const newArrowDirection = newExpandedState[index] ? "up" : "down";
        const updatedArrowDirection = [...arrowDirection];
        updatedArrowDirection[index] = newArrowDirection;
        setArrowDirection(updatedArrowDirection);
    }

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            {/* <PageContent 
                            contentTitle={Title}
                            richContent={richContent}
                            /> */}
                            <a className="avatar-profile"></a>
                            <h1 className="user-profile">Omar,Basheer's Settings</h1>
                            <form></form>
                            <h2>Feature options</h2>
                            <div className="feature-flag-wrapper">
                                <div className="feature-options-container">
                                    <span className=""></span>
                                    <h2 className="user">User</h2>
                                    <table className="feature-table">
                                        <thead className="tHead">
                                            <th className="colHeader" style={{ width: '50%' }}>Feature</th>
                                            <th className="colHeader" style={{ width: '50%' }}>Status</th>
                                            <th className="colHeader">State</th>
                                        </thead>
                                        <tbody className="tBody">
                                            <tr className="view-row" >
                                                <td className="view-cell">
                                                    <div className="toggle-details">
                                                        <button className="toggle-details-toggle" onClick={() => handleToggleClick(0)}>
                                                            <span className="toggle-details-summary">
                                                                <span className="toggle-icon">
                                                                    {arrowDirection[0] === "down" ? (
                                                                        <svg className="toggle-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55076 0L0.449951 1.10081L5.3491 6.00074L0.449951 10.8991L1.55076 11.9999L7.5515 6.00074L1.55076 0Z" fill="black" />
                                                                        </svg>
                                                                    ) : (
                                                                        <svg className="toggle-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00109863 0.836588L0.673157 0.163574L7.00062 6.49009L13.3271 0.163574L14.0011 0.836588L7.00062 7.83611L0.00109863 0.836588Z" fill="black" />
                                                                        </svg>
                                                                    )}
                                                                </span>
                                                                <span className="summary text">Auto Show Closed Captions</span>
                                                            </span>
                                                        </button>
                                                        <div className={expandedState[0] ? "expandable_1" : "expandable_0"}>
                                                            <div>
                                                                <div>Automatically show closed captions in the user's current
                                                                    language (if available) when playing canvas media.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="view-cell"></td>
                                                <td className="view-cell"></td>
                                            </tr>
                                            <tr className="view-row" >
                                                <td className="view-cell">
                                                    <div className="toggle-details">
                                                        <button className="toggle-details-toggle" onClick={() => handleToggleClick(1)}>
                                                            <span className="toggle-details-summary">
                                                                <span className="toggle-icon">
                                                                {arrowDirection[1] === "down" ? (
                                                                        <svg className="toggle-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55076 0L0.449951 1.10081L5.3491 6.00074L0.449951 10.8991L1.55076 11.9999L7.5515 6.00074L1.55076 0Z" fill="black" />
                                                                        </svg>
                                                                    ) : (
                                                                        <svg className="toggle-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00109863 0.836588L0.673157 0.163574L7.00062 6.49009L13.3271 0.163574L14.0011 0.836588L7.00062 7.83611L0.00109863 0.836588Z" fill="black" />
                                                                        </svg>
                                                                    )}
                                                                </span>
                                                                <span className="summary text">Set Font Properties</span>
                                                            </span>
                                                        </button>
                                                        <div className={expandedState[1] ? "expandable_1" : "expandable_0"}>
                                                            <div>
                                                                <div>Automatically show closed captions in the user's current
                                                                    language (if available) when playing canvas media.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="view-cell"></td>
                                                <td className="view-cell"></td>
                                            </tr>
                                            <tr className="view-row" >
                                                <td className="view-cell">
                                                    <div className="toggle-details">
                                                        <button className="toggle-details-toggle" onClick={() => handleToggleClick(2)}>
                                                            <span className="toggle-details-summary">
                                                                <span className="toggle-icon">
                                                                {arrowDirection[2] === "down" ? (
                                                                        <svg className="toggle-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55076 0L0.449951 1.10081L5.3491 6.00074L0.449951 10.8991L1.55076 11.9999L7.5515 6.00074L1.55076 0Z" fill="black" />
                                                                        </svg>
                                                                    ) : (
                                                                        <svg className="toggle-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00109863 0.836588L0.673157 0.163574L7.00062 6.49009L13.3271 0.163574L14.0011 0.836588L7.00062 7.83611L0.00109863 0.836588Z" fill="black" />
                                                                        </svg>
                                                                    )}
                                                                </span>
                                                                <span className="summary text">Auto Play Text-to-Speech</span>
                                                            </span>
                                                        </button>
                                                        <div className={expandedState[2] ? "expandable_1" : "expandable_0"}>
                                                            <div>
                                                                <div>Automatically speak text information in the user's current
                                                                    language (if available) when viewing canvas documents.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="view-cell"></td>
                                                <td className="view-cell"></td>
                                            </tr>
                                            <tr className="view-row" >
                                                <td className="view-cell">
                                                    <div className="toggle-details">
                                                        <button className="toggle-details-toggle" onClick={() => handleToggleClick(3)}>
                                                            <span className="toggle-details-summary">
                                                                <span className="toggle-icon">
                                                                {arrowDirection[3] === "down" ? (
                                                                        <svg className="toggle-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55076 0L0.449951 1.10081L5.3491 6.00074L0.449951 10.8991L1.55076 11.9999L7.5515 6.00074L1.55076 0Z" fill="black" />
                                                                        </svg>
                                                                    ) : (
                                                                        <svg className="toggle-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00109863 0.836588L0.673157 0.163574L7.00062 6.49009L13.3271 0.163574L14.0011 0.836588L7.00062 7.83611L0.00109863 0.836588Z" fill="black" />
                                                                        </svg>
                                                                    )}
                                                                </span>
                                                                <span className="summary text">Automatic Lesson Summarizer</span>
                                                            </span>
                                                        </button>
                                                        <div className={expandedState[3] ? "expandable_1" : "expandable_0"}>
                                                            <div>
                                                                <div>Automatically generate AI summaries of chosen canvas documents.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="view-cell"></td>
                                                <td className="view-cell"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

export default SysPref