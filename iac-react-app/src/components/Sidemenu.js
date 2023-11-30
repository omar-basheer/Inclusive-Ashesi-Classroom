import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import "../styles/global.css"
import "../styles/sidemenu.css"

function Sidemenu({courseID}) {
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
                            <Link to={`/Dashboard/${courseID}/Modules`} className="section-link">
                                Modules
                            </Link>
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
                    </ul>
                </nav>
            </div>
        </div>
    )
}

Sidemenu.propTypes = {
    courseID: PropTypes.string.isRequired
};

export default Sidemenu
