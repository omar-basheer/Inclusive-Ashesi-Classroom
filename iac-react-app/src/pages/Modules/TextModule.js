import React from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import Sidemenu from "../../components/Sidemenu";

function TextModule() {
    const { courseID } = useParams()
    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu
                        courseID={courseID}
                    />
                </div>
            </div>
        </div>
    )
}

export default TextModule