import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import "../styles/global.css"
import "../styles/sidemenu.css"

/**
 * Renders a side menu component for a specific course.
 * @param {Object} props - The component props.
 * @param {string} props.course_id - The ID of the course.
 * @returns {JSX.Element} The rendered side menu component.
 */
function Sidemenu({course_id}) {
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
                            <Link to={`/${course_id}/Modules`} className="section-link">
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

// Sidemenu.propTypes = {
//     course_id: PropTypes.string.isRequired
// };

export default Sidemenu
