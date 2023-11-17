import React from 'react'
import "../Breadcrumbs/Crumbs.js"
import "../../styles/global.css"
import "../Breadcrumbs/crumbs.css"

function Breadcrumbs() {
    return (
        <div className='toggle-and-crumbs'>
            <button className='course-menu-toggle' type='button'>
                <i className='icon-hamburger'>
                    =
                </i>
            </button>
            <div className='app-crumbs'>
                <nav className='breadcrumbs'>
                    <ul className='crumbs'>
                        <li  className="crumb-course">
                            <a className='crumb-course-link' href="https://ashesi.instructure.com/courses/1946">
                                23_SEM1_CS415_B
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='right-of-crumbs'></div>
        </div>


    );
}

export default Breadcrumbs