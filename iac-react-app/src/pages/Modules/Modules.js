import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import "../../styles/modules.css"
import Sidemenu from "../../components/Sidemenu";
import Collapsible from "../../components/Collapsible";
import { fetchCourseModules } from "../../services/services";
import CircularProgress from '@mui/joy/CircularProgress';


/**
 * Renders the Modules component.
 * 
 * @returns {JSX.Element} The Modules component.
 */
function Modules() {
    const token = JSON.parse(localStorage.getItem('token'))
    const { course_id } = useParams();
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourseModules(course_id, token, setModules)
            .then(() => setLoading(false)) 
            .catch(() => setLoading(false));
    }, [course_id, token]);

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
                            {loading ? (
                                <div className='circular-progress-container' style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%', 
                                    paddingTop: '20px'
                                }}>
                                    <CircularProgress color="neutral" />
                                </div>
                                 ) : (<>
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
                                </>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules