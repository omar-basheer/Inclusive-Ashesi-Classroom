import React from "react"
import "../styles/global.css"

import ToDo from "./ToDo"


function ProfileEdit(){
    const handleDeleteAccount = () => {
        // Use window.confirm for a simple confirmation alert
        const isConfirmed = window.confirm("Are you sure you want to delete your account?");
    
        if (isConfirmed) {
          // Perform the actual delete account logic here
          // ...
          alert("Account deleted successfully!"); // You can customize this alert message
        } else {
          alert("Deletion canceled."); // You can customize this alert message
        }
      };

    return(
        <div className="right-side">
        <div className="show-secondary">
            <div class="profile-edit">
                <a class="btn button-sidebar-wide" href="">
                    <i class="icon-stats"></i>
                    Edit your Profile
                </a>
                <a class="btn1 button-sidebar-wide" href="" onClick={handleDeleteAccount}>
                    <i class="icon-stats"></i>
                    Delete Account
                </a>
            </div>
        </div>
    </div>
    )
}


export default ProfileEdit