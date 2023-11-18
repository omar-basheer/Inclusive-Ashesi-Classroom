import React from "react";
import '../styles/global.css'
import "../Layout/layout.css"
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Crumbs";
import Sidemenu from "../components/Sidemenu/Sidemenu";

function Layout(){
    return(
        <div className="layout-wrapper">
            <Header />
            <Breadcrumbs />
            
            <Outlet />
        </div>
    )
}

export default Layout