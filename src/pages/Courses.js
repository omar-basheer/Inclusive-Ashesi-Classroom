import React from "react";
import '../styles/global.css'
import '../styles/courses.css'
import Sidemenu from "../components/Sidemenu/Sidemenu";
import ToDo from "../components/ToDo/ToDo";
import PageContent from "../components/PageContent/PageContent";

function Courses() {
    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent />
                        </div>
                    </div>
                    <div className="iac-main-right-side-wrapper">
                        <div className="right-side">
                            <div className="show-secondary">
                                <div class="course-options">
                                    <a class="btn button-sidebar-wide" href="/courses/1946?view=feed">
                                        <i class="icon-stats"></i>
                                        View Course Stream
                                    </a>
                                    <a class="btn button-sidebar-wide" href="/courses/1946?view=feed">
                                        <i class="icon-calender"></i>
                                        View Course Calender
                                    </a>
                                    <a class="btn button-sidebar-wide" href="/courses/1946?view=feed">
                                        <i class="icon-unmuted"></i>
                                        View Course Notifications
                                    </a>
                                </div>
                            </div>
                            <ToDo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses