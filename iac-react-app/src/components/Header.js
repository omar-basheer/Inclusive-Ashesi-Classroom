import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../pages/auth/AuthProvider';
import { AuthProvider } from '../pages/auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

import "../styles/global.css"
import "../styles/header.css"
import CourseTray from './CourseTray';


/**
 * Renders the header component.
 *
 * @returns {JSX.Element} The header component.
 */
function Header() {

    const authContext = useContext(AuthContext);
    const [isCourseMenuOpen, setCourseMenuOpen] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () => {
        const isConfirmed = window.confirm("Are you sure you want to logout?");
    
        if (isConfirmed) {
            authContext.logout();

        }
    };
    
    const handleIconClick = () => {
        setCourseMenuOpen(!isCourseMenuOpen)
    }

    const closeCourseTray = () => {
        setCourseMenuOpen(false);
    }
    return (
        <div>
            {isCourseMenuOpen && (<CourseTray closeTray={closeCourseTray} />)}
            <div className='iac-app-header'>
                <div className='main-nav'>
                    <div className='logo-container'>
                        <a href="https://ashesi.instructure.com/" class="logomark">
                        </a>
                    </div>
                    <ul className='menu-list'>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' href='/Preferences'>
                                <div className='menu-icon-container'>
                                    <div className='iac-avatar'>
                                        <img src="https://ashesi.instructure.com/images/thumbnails/276048/t81LkJEf3Qy6MbWqYtELhqeX9EkW6baNoiEMmXhZ" alt="Omar,Basheer" ></img>
                                    </div>
                                </div>
                                <div className='menu-item-text'>Account</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' href='/Dashboard'>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.3583 17.1713H18.3365V15.6247H24.1512C24.4411 14.0379 24.4043 12.4068 24.0431 10.8355C23.6819 9.26412 23.0043 7.78716 22.0535 6.49895C21.1027 5.21075 19.8997 4.13963 18.5214 3.35405C17.143 2.56847 15.6197 2.08571 14.0486 1.93662C12.4776 1.78753 10.8934 1.97538 9.39735 2.48818C7.90129 3.00098 6.52625 3.82744 5.3601 4.91475C4.19394 6.00206 3.26233 7.32631 2.62478 8.80286C1.98724 10.2794 1.65779 11.8758 1.65749 13.49C1.65565 14.2071 1.71781 14.9229 1.84321 15.6285H8.37385V17.176H0.639777L0.500491 16.5851C0.262837 15.5714 0.143764 14.5324 0.145777 13.49C0.145777 6.23581 5.91221 0.335358 13 0.335358C20.0878 0.335358 25.8542 6.23581 25.8542 13.49C25.8563 14.5322 25.7366 15.571 25.4976 16.5842L25.3583 17.1713ZM6.17406 8.32486L4.66513 6.78111L5.73392 5.68671L7.24285 7.23141L6.17406 8.32486ZM19.8241 8.32486L18.7571 7.23141L20.2661 5.68766L21.3348 6.78111L19.8241 8.32486ZM12.2432 5.11291V2.92791H13.7558V5.11291H12.2432ZM13.6946 18.6314C13.1604 18.6316 12.6362 18.483 12.1782 18.2017C11.7202 17.9204 11.3456 17.5169 11.0946 17.0345C10.5003 15.8869 9.63392 10.1669 9.46585 9.03071C9.44273 8.87228 9.46821 8.71042 9.53877 8.56743C9.60934 8.42445 9.72151 8.30737 9.85984 8.23233C9.99817 8.1573 10.1558 8.12801 10.3111 8.14849C10.4664 8.16898 10.6116 8.23823 10.7268 8.34671C11.5514 9.12666 15.6928 13.0701 16.2871 14.2187C16.5249 14.6762 16.6429 15.1888 16.6297 15.7068C16.6165 16.2248 16.4725 16.7305 16.2117 17.1747C15.9509 17.6189 15.5822 17.9865 15.1415 18.2417C14.7007 18.497 14.2029 18.6312 13.6964 18.6314H13.6946ZM11.3109 11.039C11.6981 13.3722 12.168 15.809 12.4252 16.3106C12.6024 16.6531 12.9053 16.9096 13.2674 17.0236C13.6294 17.1376 14.0209 17.0998 14.3557 16.9186C14.6905 16.7373 14.9412 16.4273 15.0527 16.057C15.1641 15.6866 15.1272 15.286 14.95 14.9435C14.6881 14.44 12.9805 12.6768 11.3109 11.039Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='menu-item-text'>Dashboard</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/Dashboard/23_SEM1_CS415_B'*/ onClick={handleIconClick}>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.80735 18.3475C2.69957 18.3475 1.74407 19.0889 1.57878 20.0831C1.56183 20.1945 1.55252 20.3069 1.55092 20.4195V20.4473C1.54715 20.9463 1.72688 21.4293 2.05607 21.8048C2.25222 22.0374 2.49701 22.2243 2.77325 22.3523C3.04949 22.4804 3.35047 22.5465 3.65507 22.5462H15.5714V21.1451H3.12857V19.7449H15.5714V18.3475H3.80735ZM5.75735 8.54924H14.1739V5.74523H5.75642L5.75735 8.54924ZM4.35335 9.94662V4.34785H15.5714V9.94662H4.35335ZM5.05442 12.746V11.3468H14.8741V12.7469L5.05442 12.746ZM3.65321 1.54847C3.09593 1.55018 2.56197 1.77186 2.16791 2.1651C1.77385 2.55834 1.55171 3.09119 1.55 3.64731V17.6878C2.20453 17.2072 2.99565 16.9475 3.80828 16.9465H18.3869V1.54847H3.65321ZM0.145996 3.64731C0.146488 2.71931 0.516185 1.82947 1.17384 1.17336C1.83149 0.517253 2.72328 0.148561 3.65321 0.148315H19.7834V18.3475H16.9782V22.5471H19.0824V23.9445H3.65321C2.72396 23.9423 1.83341 23.5729 1.17633 22.9172C0.519251 22.2615 0.149131 21.3728 0.146925 20.4455L0.145996 3.64731Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='menu-item-text'>Courses</div>
                            </a>
                        </li>
                        
                        
                        <li className='menu-list-item'>
                            <a className='menu-list-link' href='/Screening' onClick={closeCourseTray}>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.51708 10.2125H17.4834V8.71751H8.51708V10.2125ZM8.51708 14.6957H15.9893V13.2016H8.51708V14.6957ZM8.51708 5.72936H15.9893V4.23436H8.51708V5.72936ZM23.4615 8.96822H21.2199V0.00100708H4.78422V8.96729H2.53893C1.94466 8.96803 1.37494 9.20443 0.954719 9.62465C0.534502 10.0449 0.2981 10.6146 0.297363 11.2089V21.6702C0.2981 22.2644 0.534502 22.8341 0.954719 23.2544C1.37494 23.6746 1.94466 23.911 2.53893 23.9117H23.4615C24.0558 23.911 24.6255 23.6746 25.0457 23.2544C25.4659 22.8341 25.7023 22.2644 25.7031 21.6702V11.2089C25.7023 10.6146 25.4659 10.0449 25.0457 9.62465C24.6255 9.20443 24.0558 8.96803 23.4615 8.96729V8.96822ZM23.4615 10.4623C23.6581 10.4638 23.8462 10.5425 23.9852 10.6815C24.1242 10.8205 24.2029 11.0086 24.2044 11.2052V16.0124L21.2153 17.8054V10.4623H23.4615ZM6.27551 17.9345V1.49879H19.7249V17.9345H6.27551ZM2.53893 10.4623H4.78051V17.8101L1.79143 16.017V11.2089C1.79193 11.0109 1.87087 10.8211 2.01097 10.6812C2.15107 10.5412 2.34092 10.4625 2.53893 10.4623ZM23.4615 22.4177H2.53893C2.34237 22.4162 2.15426 22.3375 2.01527 22.1985C1.87627 22.0595 1.79754 21.8714 1.79608 21.6748V17.7572L4.58179 19.4286H21.427L24.2127 17.7572V21.6683C24.2128 21.7669 24.1935 21.8645 24.1558 21.9556C24.118 22.0467 24.0627 22.1295 23.9929 22.1991C23.9231 22.2687 23.8402 22.3239 23.749 22.3614C23.6578 22.3989 23.5601 22.418 23.4615 22.4177Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='menu-item-text'>Screening</div>
                            </a>
                        </li>
                    </ul>
                    <div className='logout-container'>
                        <button className='logout-button' onClick={handleLogout}>
                            <svg className='iac-icon' xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                                <path d="M25.675 30.28V2.47998H24.167V30.28H25.675ZM22.4705 16.38L14.4105 3.99998L13.3445 5.60998L19.591 15.22H0.325012V17.53H19.591L13.3445 27.14L14.4105 28.78L22.4705 16.38Z" fill="white"/>
                            </svg>
                            
                        </button>
                    </div>
                </div>
                <div className='secondary-nav'></div>
            </div>

        </div>
    )
}

export default Header