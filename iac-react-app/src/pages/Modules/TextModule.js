import React from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import Sidemenu from "../../components/Sidemenu";
import FileViewer from "../../components/FileViewer";

function TextModule() {
    const { courseID } = useParams()
    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu
                        courseID={courseID}
                    />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <h2> Document Title</h2>
                            <div className="doc-preview">
                               <FileViewer />
                            </div>
                            <div className="sequence-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextModule