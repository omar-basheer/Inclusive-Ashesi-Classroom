import React from "react"
import "../styles/global.css"

import ToDo from "./ToDo"


function ProfileEdit(){
    return(
        <div className="right-side">
        <div className="show-secondary">
            <div class="profile-edit">
                <a class="btn button-sidebar-wide" href="">
                    <i class="icon-stats"></i>
                    Edit your Profile
                </a>
            </div>
        </div>
        <ToDo />
    </div>
    )
}


export default ProfileEdit