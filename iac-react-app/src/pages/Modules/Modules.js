import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import "../../styles/modules.css"
import Sidemenu from "../../components/Sidemenu";
import Collapsible from "../../components/Collapsible";
import { fetchCourseModules } from "../../services/services";


/**
 * Renders the Modules component.
 * 
 * @returns {JSX.Element} The Modules component.
 */
function Modules() {
    const token = JSON.parse(localStorage.getItem('token'))
    const { course_id } = useParams();
    const [modules, setModules] = useState([]);

    useEffect(() => {
        fetchCourseModules(course_id, token, setModules);
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
                            <div className="header-bar"></div>
                            <div className="item-group-container">
                                <div className="context-modules">
                                    {modules.map(module => (
                                        <Collapsible
                                            key={module.module_id}
                                            moduleDescription={module.module_description}
                                            files={module.files}
                                            lessons={module.lessons}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules