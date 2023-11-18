import React from "react";
import '../styles/global.css'
import '../styles/courses.css'
import Sidemenu from "../components/Sidemenu";
import ToDo from "../components/ToDo";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";

function Courses() {
    const Title = "[23_SEM1_CS415_B] - Software Engineering"
    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent 
                            contentTitle={Title}
                            />
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

export default Courses