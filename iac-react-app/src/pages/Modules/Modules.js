import React from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import "../../styles/modules.css"
import Sidemenu from "../../components/Sidemenu";
import Collapsible from "../../components/Collapsible";


function Modules() {
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
                            <div className="header-bar"></div>
                            <div className="item-group-container">
                                <div className="context-modules">
                                    <Collapsible />
                                    <Collapsible />
                                    <Collapsible />
                                    <Collapsible />
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