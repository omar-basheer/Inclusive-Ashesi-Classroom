import React from "react"
import "../styles/global.css"

import ToDo from "./ToDo"


function RightSide(){
    return(
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
    )
}


export default RightSide