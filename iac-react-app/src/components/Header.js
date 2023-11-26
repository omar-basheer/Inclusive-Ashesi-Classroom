import React, { useState } from 'react';
import "../styles/global.css"
import "../styles/header.css"
import CourseTray from './CourseTray';

function Header() {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false)

    const handleIconClick = () => {
        setSideMenuOpen(!isSideMenuOpen)
    }
    return (
        <div>
            {isSideMenuOpen && ( <CourseTray />)}
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
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.485 17.2533C17.485 17.1067 17.485 14.6133 16.679 13.1067C16.094 11.9733 14.547 11.4533 12.129 10.5467C11.908 10.4667 11.687 10.4 11.466 10.32V9.18667C12.194 8.50667 12.571 7.53333 12.571 6.48V3.92C12.558 1.73333 10.868 0 8.736 0C6.604 0 4.927 1.73333 4.927 3.92V6.48C4.927 7.45333 5.369 8.44 6.032 9.18667V10.32C5.811 10.4 5.59 10.4667 5.369 10.5467C2.951 11.3733 1.404 11.9733 0.819 13.1067C0 14.6133 0 17.1733 0 17.2533C0 17.7067 0.299 18 0.728 18H16.809C17.264 18 17.55 17.6933 17.485 17.2533ZM1.469 16.4933C1.547 15.7467 1.69 14.5333 1.911 13.8533C2.21 13.1733 3.9 12.5733 5.655 11.9733C6.019 11.8267 6.383 11.6667 6.825 11.52C7.124 11.44 7.345 11.1467 7.345 10.84V8.89333C7.345 8.66667 7.267 8.44 7.124 8.29333C6.604 7.84 6.318 7.16 6.318 6.48V3.92C6.318 2.56 7.345 1.50667 8.671 1.50667C9.997 1.50667 11.024 2.56 11.024 3.92V6.48C11.024 7.16 10.725 7.84 10.218 8.29333C10.075 8.44 9.997 8.66667 9.997 8.89333V10.8533C9.997 11.16 10.218 11.4533 10.517 11.5333C10.881 11.68 11.323 11.84 11.687 11.9867C13.455 12.6667 15.145 13.2667 15.431 13.8667C15.795 14.5467 15.951 15.68 16.016 16.5067H1.469V16.4933ZM25.48 10.5467C25.116 9.72 24.011 9.26667 22.542 8.73333L22.321 8.65333V8.2C22.906 7.66667 23.205 6.92 23.205 6.09333V4.66667C23.205 3.01333 21.957 1.73333 20.345 1.73333C18.733 1.73333 17.485 3.09333 17.485 4.66667V6.09333C17.485 6.92 17.784 7.68 18.369 8.2V8.66667L18.148 8.74667C17.199 9.12 16.458 9.34667 15.951 9.72C15.73 9.86667 15.652 10.0933 15.652 10.4C15.73 10.6267 15.873 10.8533 16.094 11C17.121 11.5333 17.706 11.9733 17.927 12.4267C18.226 13.0267 18.447 13.7867 18.59 14.84C18.668 15.1467 18.954 15.44 19.318 15.44H25.272C25.714 15.44 26 15.0667 26 14.76C26 14.24 26 11.52 25.48 10.5467ZM19.903 13.9333C19.76 13.0267 19.539 12.28 19.24 11.68C19.019 11.1467 18.577 10.7733 17.992 10.32C18.213 10.1733 18.434 10.0933 18.655 10.0133L19.383 9.70667C19.604 9.62667 19.825 9.33333 19.825 9.02667V7.74667C19.825 7.52 19.747 7.29333 19.526 7.14667C19.162 6.92 18.941 6.46667 18.941 6.01333V4.6C18.941 3.77333 19.526 3.17333 20.332 3.17333C21.138 3.17333 21.723 3.85333 21.723 4.6V6.02667C21.723 6.48 21.502 6.85333 21.138 7.16C20.995 7.30667 20.839 7.53333 20.839 7.76V9.12C20.839 9.42667 20.982 9.72 21.281 9.8L22.009 10.1067C22.893 10.4133 23.998 10.8533 24.141 11.16C24.362 11.5333 24.505 12.8133 24.505 13.9467H19.903V13.9333Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='menu-item-text'>Groups</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.2994 19.8138H18.8139V18.2993H17.2994V19.8138ZM15.7849 21.3283V16.7848H20.3275V21.3274L15.7849 21.3283ZM11.2423 19.8138H12.7568V18.2993H11.2432L11.2423 19.8138ZM9.72782 21.3283V16.7848H14.2704V21.3274L9.72782 21.3283ZM5.18617 19.8138H6.70067V18.2993H5.18617V19.8138ZM3.6726 21.3274V16.7848H8.21517V21.3274H3.6726ZM17.2994 13.7568H18.8139V12.2432H17.2994V13.7568ZM15.7849 15.2713V10.7287H20.3275V15.2713H15.7849ZM11.2423 13.7568H12.7568V12.2432H11.2432L11.2423 13.7568ZM9.72782 15.2713V10.7287H14.2704V15.2713H9.72782ZM5.18617 13.7568H6.70067V12.2432H5.18617V13.7568ZM3.6726 15.2713V10.7287H8.21517V15.2713H3.6726ZM2.15717 24.3555H21.8429V7.70062H2.15717V24.3555ZM21.8429 6.18612V3.91484C21.8426 3.71395 21.7627 3.52137 21.6207 3.37932C21.4786 3.23728 21.2861 3.15737 21.0852 3.15712H18.8139V3.91391C18.8139 4.11474 18.7341 4.30735 18.5921 4.44937C18.4501 4.59138 18.2575 4.67116 18.0566 4.67116C17.8558 4.67116 17.6632 4.59138 17.5212 4.44937C17.3792 4.30735 17.2994 4.11474 17.2994 3.91391V3.15712H6.70067V3.91391C6.70067 4.11474 6.62089 4.30735 6.47888 4.44937C6.33687 4.59138 6.14426 4.67116 5.94342 4.67116C5.74259 4.67116 5.54998 4.59138 5.40797 4.44937C5.26596 4.30735 5.18617 4.11474 5.18617 3.91391V3.15712H2.91489C2.71401 3.15737 2.52142 3.23728 2.37938 3.37932C2.23733 3.52137 2.15742 3.71395 2.15717 3.91484V6.18612H21.8429ZM21.0861 1.64355C21.6883 1.64429 22.2655 1.88382 22.6913 2.30961C23.1171 2.7354 23.3567 3.31268 23.3574 3.91484V25.87H0.644531V3.91484C0.645513 3.313 0.885027 2.7361 1.31059 2.31054C1.73615 1.88498 2.31305 1.64546 2.91489 1.64448H5.18617V0.886767C5.18617 0.685931 5.26596 0.493322 5.40797 0.35131C5.54998 0.209298 5.74259 0.129517 5.94342 0.129517C6.14426 0.129517 6.33687 0.209298 6.47888 0.35131C6.62089 0.493322 6.70067 0.685931 6.70067 0.886767V1.64355H17.2994V0.886767C17.2994 0.685931 17.3792 0.493322 17.5212 0.35131C17.6632 0.209298 17.8558 0.129517 18.0566 0.129517C18.2575 0.129517 18.4501 0.209298 18.5921 0.35131C18.7341 0.493322 18.8139 0.685931 18.8139 0.886767V1.64355H21.0861Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='menu-item-text'>Calender</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.51708 10.2125H17.4834V8.71751H8.51708V10.2125ZM8.51708 14.6957H15.9893V13.2016H8.51708V14.6957ZM8.51708 5.72936H15.9893V4.23436H8.51708V5.72936ZM23.4615 8.96822H21.2199V0.00100708H4.78422V8.96729H2.53893C1.94466 8.96803 1.37494 9.20443 0.954719 9.62465C0.534502 10.0449 0.2981 10.6146 0.297363 11.2089V21.6702C0.2981 22.2644 0.534502 22.8341 0.954719 23.2544C1.37494 23.6746 1.94466 23.911 2.53893 23.9117H23.4615C24.0558 23.911 24.6255 23.6746 25.0457 23.2544C25.4659 22.8341 25.7023 22.2644 25.7031 21.6702V11.2089C25.7023 10.6146 25.4659 10.0449 25.0457 9.62465C24.6255 9.20443 24.0558 8.96803 23.4615 8.96729V8.96822ZM23.4615 10.4623C23.6581 10.4638 23.8462 10.5425 23.9852 10.6815C24.1242 10.8205 24.2029 11.0086 24.2044 11.2052V16.0124L21.2153 17.8054V10.4623H23.4615ZM6.27551 17.9345V1.49879H19.7249V17.9345H6.27551ZM2.53893 10.4623H4.78051V17.8101L1.79143 16.017V11.2089C1.79193 11.0109 1.87087 10.8211 2.01097 10.6812C2.15107 10.5412 2.34092 10.4625 2.53893 10.4623ZM23.4615 22.4177H2.53893C2.34237 22.4162 2.15426 22.3375 2.01527 22.1985C1.87627 22.0595 1.79754 21.8714 1.79608 21.6748V17.7572L4.58179 19.4286H21.427L24.2127 17.7572V21.6683C24.2128 21.7669 24.1935 21.8645 24.1558 21.9556C24.118 22.0467 24.0627 22.1295 23.9929 22.1991C23.9231 22.2687 23.8402 22.3239 23.749 22.3614C23.6578 22.3989 23.5601 22.418 23.4615 22.4177Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='menu-item-text'>Inbox</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.52941C6.67435 1.52941 1.52941 6.67435 1.52941 13C1.52941 19.3257 6.67435 24.4706 13 24.4706C19.3257 24.4706 24.4706 19.3257 24.4706 13C24.4706 6.67435 19.3257 1.52941 13 1.52941ZM13 26C5.83165 26 0 20.1683 0 13C0 5.83165 5.83165 0 13 0C20.1683 0 26 5.83165 26 13C26 20.1683 20.1683 26 13 26ZM18.6591 18.2006L12.2356 13.383V5.35356H13.765V12.6183L19.5768 16.9756L18.6591 18.2006Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='menu-item-text'>History</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.2478 16.7913H10.3186V21.4807C11.2114 21.7933 11.8517 22.6435 11.8517 23.6433C11.8517 24.9083 10.8265 25.9338 9.56194 25.9338C8.29735 25.9338 7.2722 24.9083 7.2722 23.6433C7.2722 22.6435 7.91249 21.7933 8.80523 21.4807V16.7913H7.13807L7.13852 19.4672C7.13852 20.5085 6.29466 21.3527 5.25371 21.3527L4.45523 21.352C4.14584 22.2507 3.29317 22.8964 2.28974 22.8964C1.02515 22.8964 0 21.8709 0 20.6058C0 19.3408 1.02515 18.3153 2.28974 18.3153C3.28495 18.3153 4.13187 18.9504 4.44752 19.8376H5.27741C5.46917 19.8376 5.62461 19.6821 5.62461 19.4903V16.7913H2.29694C1.85864 16.7913 1.50333 16.4359 1.50333 15.9974V0.793893C1.50333 0.355438 1.85864 0 2.29694 0H23.2528C23.6911 0 24.0464 0.355438 24.0464 0.793893V15.9974C24.0464 16.4359 23.6911 16.7913 23.2528 16.7913H19.941V19.4903C19.941 19.6821 20.0964 19.8376 20.2882 19.8376H21.1181C21.4337 18.9504 22.2806 18.3153 23.2758 18.3153C24.5404 18.3153 25.5656 19.3408 25.5656 20.6058C25.5656 21.8709 24.5404 22.8964 23.2758 22.8964C22.2724 22.8964 21.4197 22.2507 21.1103 21.352L20.3124 21.3527C19.2709 21.3527 18.4271 20.5085 18.4271 19.4672L18.4275 16.7913H16.7613V21.4807C17.654 21.7933 18.2943 22.6435 18.2943 23.6433C18.2943 24.9083 17.2691 25.9338 16.0045 25.9338C14.74 25.9338 13.7148 24.9083 13.7148 23.6433C13.7148 22.6435 14.3551 21.7933 15.2478 21.4807V16.7913ZM16.0228 24.3947C16.4376 24.3947 16.7739 24.0583 16.7739 23.6433C16.7739 23.2283 16.4376 22.8919 16.0228 22.8919C15.608 22.8919 15.2717 23.2283 15.2717 23.6433C15.2717 24.0583 15.608 24.3947 16.0228 24.3947ZM9.58018 24.3947C9.99501 24.3947 10.3313 24.0583 10.3313 23.6433C10.3313 23.2283 9.99501 22.8919 9.58018 22.8919C9.16535 22.8919 8.82906 23.2283 8.82906 23.6433C8.82906 24.0583 9.16535 24.3947 9.58018 24.3947ZM23.2941 21.3572C23.7089 21.3572 24.0452 21.0208 24.0452 20.6058C24.0452 20.1909 23.7089 19.8545 23.2941 19.8545C22.8793 19.8545 22.543 20.1909 22.543 20.6058C22.543 21.0208 22.8793 21.3572 23.2941 21.3572ZM2.27149 21.3572C2.68633 21.3572 3.02261 21.0208 3.02261 20.6058C3.02261 20.1909 2.68633 19.8545 2.27149 19.8545C1.85666 19.8545 1.52038 20.1909 1.52038 20.6058C1.52038 21.0208 1.85666 21.3572 2.27149 21.3572ZM12.2506 5.25255L14.5245 6.61501C14.6537 6.70978 14.7303 6.86184 14.7303 7.02375C14.7303 7.18566 14.6537 7.33772 14.5245 7.43249L12.2506 8.79495C12.0972 8.88494 11.9081 8.885 11.7545 8.79509C11.601 8.70518 11.5063 8.53896 11.5061 8.35896V5.68854C11.5063 5.50854 11.601 5.34231 11.7545 5.25241C11.9081 5.1625 12.0972 5.16255 12.2506 5.25255ZM22.6056 12.6067V1.83772C22.6056 1.61849 22.4279 1.44077 22.2088 1.44077H3.34094C3.12179 1.44077 2.94414 1.61849 2.94414 1.83772V12.6067H22.6056ZM22.6056 14.0475H2.94414V14.9538C2.94414 15.173 3.12179 15.3508 3.34094 15.3508H22.2088C22.4279 15.3508 22.6056 15.173 22.6056 14.9538V14.0475Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='menu-item-text'>Studio</div>
                            </a>
                        </li>
                        <li className='menu-list-item'>
                            <a className='menu-list-link' /*href='/profile/settings'*/>
                                <div className='menu-icon-container'>
                                    <svg className='iac-icon' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.324 15.9484C12.0372 15.9487 11.7569 16.034 11.5187 16.1936C11.2804 16.3532 11.0948 16.5799 10.9854 16.845C10.876 17.1101 10.8477 17.4017 10.9041 17.6829C10.9605 17.9641 11.099 18.2223 11.3022 18.4247C11.5054 18.6271 11.764 18.7647 12.0454 18.8201C12.3268 18.8755 12.6183 18.8462 12.883 18.7358C13.1477 18.6255 13.3738 18.4391 13.5325 18.2002C13.6913 17.9614 13.7756 17.6808 13.7748 17.394C13.7734 17.0101 13.62 16.6424 13.348 16.3715C13.0761 16.1005 12.7079 15.9484 12.324 15.9484ZM13.4706 4.498C14.2034 4.69376 14.8717 5.07923 15.408 5.61558C15.9444 6.15193 16.3299 6.82019 16.5256 7.553C16.6761 8.10985 16.7147 8.69103 16.639 9.26288C16.5634 9.83474 16.375 10.3859 16.0848 10.8844C15.7946 11.3829 15.4084 11.8189 14.9485 12.1671C14.4886 12.5153 13.9642 12.7688 13.4056 12.9129C13.3092 12.9318 13.2218 12.9824 13.1573 13.0565C13.0927 13.1307 13.0548 13.2243 13.0494 13.3224V14.5002H11.5986V13.3224C11.6032 12.9014 11.7479 12.4939 12.0099 12.1643C12.272 11.8347 12.6363 11.6018 13.0455 11.5024C13.7904 11.3091 14.4287 10.8292 14.8213 10.1673C15.0183 9.8295 15.1463 9.45597 15.1978 9.06835C15.2493 8.68073 15.2234 8.28674 15.1216 7.9092C14.9909 7.42691 14.7357 6.98747 14.3816 6.63494C14.0275 6.28241 13.5869 6.0292 13.104 5.9007C12.6674 5.78287 12.2096 5.76708 11.766 5.85454C11.3223 5.94201 10.9048 6.13039 10.5456 6.4051C10.1946 6.67529 9.91061 7.02271 9.7156 7.4204C9.52059 7.81809 9.41981 8.25537 9.4211 8.6983H7.97421C7.97225 8.03338 8.12373 7.37697 8.41685 6.78014C8.70996 6.18331 9.13682 5.66215 9.66421 5.2572C10.1978 4.84691 10.8187 4.56502 11.4788 4.43336C12.1389 4.3017 12.8204 4.32382 13.4706 4.498ZM12.324 0C9.88655 0 7.50383 0.72279 5.47716 2.07697C3.45049 3.43115 1.87089 5.35589 0.938114 7.60781C0.00533984 9.85973 -0.238717 12.3377 0.236808 14.7283C0.712332 17.1189 1.88608 19.3148 3.60962 21.0384C5.33316 22.7619 7.52909 23.9357 9.91971 24.4112C12.3103 24.8867 14.7883 24.6427 17.0402 23.7099C19.2921 22.7771 21.2169 21.1975 22.571 19.1708C23.9252 17.1442 24.648 14.7615 24.648 12.324C24.6442 9.05663 23.3446 5.92417 21.0342 3.6138C18.7238 1.30342 15.5914 0.00378466 12.324 0ZM12.324 23.1985C10.1732 23.1985 8.07076 22.5607 6.28246 21.3658C4.49415 20.1709 3.10034 18.4725 2.27728 16.4855C1.45421 14.4984 1.23886 12.3119 1.65846 10.2025C2.07805 8.09304 3.11375 6.15539 4.63457 4.63457C6.1554 3.11374 8.09305 2.07805 10.2025 1.65845C12.3119 1.23886 14.4984 1.45421 16.4855 2.27727C18.4726 3.10034 20.1709 4.49415 21.3658 6.28245C22.5607 8.07075 23.1985 10.1732 23.1985 12.324C23.1958 15.2073 22.0492 17.9716 20.0104 20.0104C17.9716 22.0492 15.2073 23.1957 12.324 23.1985Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='menu-item-text'>Help</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='secondary-nav'></div>
            </div>

        </div>
    )
}

export default Header