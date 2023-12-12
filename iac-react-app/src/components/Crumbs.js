import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../styles/global.css"
import "../styles/crumbs.css"

/**
 * Renders a breadcrumb navigation component based on the current location.
 * @returns {JSX.Element} The Crumbs component.
 */
function Crumbs() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
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
                        {/* <li className="crumb-course">
                            <a className='crumb-course-link' href="https://ashesi.instructure.com/courses/1946">
                                23_SEM1_CS415_B
                            </a>
                        </li> */}
                        {/* <span className="crumb-separator"> / </span> */}
                        {pathSegments.map((segment, index) => (
                            <li key={index} className="crumb-course">
                                {index < pathSegments.length - 1 ? (
                                    <>
                                        <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="crumb-course-link">
                                            {segment}
                                        </Link>
                                        <span className="crumb-separator"> / </span>
                                    </>

                                ) : (
                                    <span className="crumb-course-link">{segment}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='right-of-crumbs'></div>
        </div>
    );
}

export default Crumbs