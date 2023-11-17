import React from "react";
import '../styles/global.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu/Sidemenu";

function Screening() {
    return(
        <div className="iac-app">
            <Sidemenu />
            <div className="iac-layout-columns"> 
            </div>
        </div>
    )
    }

export default Screening