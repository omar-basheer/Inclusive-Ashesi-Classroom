import React from "react";
import '../styles/global.css'
import "../Layout/layout.css"
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Crumbs";
import Sidemenu from "../components/Sidemenu";

/**
 * Renders the layout of the application.
 * @returns {JSX.Element} The layout component.
 */
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