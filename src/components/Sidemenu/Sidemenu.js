import React from "react";
import "../../styles/global.css"
import "../Sidemenu/sidemenu.css"

function Sidemenu() {
    return (
        <div className="left-side-page-menu">
            <div className="sticky-menu">
                <div className="subtitle">23-24-SEM1</div>
                <nav>
                    <ul className="section-tabs">
                        <li className="section">
                            <a className="section-link" href="">Home</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Announcements</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Assignments</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Discussions</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Grades</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">People</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Quizes</a>
                        </li>
                        <li className="section">
                            <a className="section-link" href="">Modules</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidemenu
