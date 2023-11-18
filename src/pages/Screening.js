import React from "react";
import '../styles/global.css'
import '../styles/right_side.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";

function Screening() {
    const Title = "Screening Form"
    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent contentTitle={Title}/>
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

export default Screening