import React from "react";
import "../styles/global.css"
import "../styles/todo.css"

/**
 * Renders a ToDo component.
 * @returns {JSX.Element} The rendered ToDo component.
 */
function ToDo() {
    return (
        <div className="event-list">
            <div className="ToDoSidebar">
                <h2 class="todo-list-header">
                    <span>To do</span>
                </h2>
                <ul class="block-list">
                    <li className="listItem">
                        <div class="ToDoSidebarItem">
                            <svg className="ToDoSidebarItemSvg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2264 0.26065C13.3224 0.0648919 13.5369 -0.0367581 13.7553 0.0121835C13.968 0.0630085 14.1177 0.252184 14.1177 0.470534V4.75383C15.1906 4.97218 16 5.92278 16 7.05878C16 8.19478 15.1906 9.1463 14.1177 9.36465V13.647C14.1177 13.8654 13.968 14.0555 13.7553 14.1054C13.7198 14.1136 13.6835 14.1177 13.6471 14.1176C13.4711 14.1176 13.3073 14.0197 13.2264 13.8578C11.4937 10.3934 8.03483 10.3529 8 10.3529H4.70588V15.0588H5.43718C5.33835 14.3077 5.29129 13.0004 5.96612 12.1364C6.40283 11.5774 7.04659 11.2941 7.88235 11.2941V12.2352C7.34493 12.2352 6.96093 12.3924 6.70871 12.7143C6.13553 13.4465 6.33318 14.9129 6.45647 15.4164C6.4913 15.5567 6.4593 15.7054 6.37083 15.8193C6.28141 15.9331 6.144 16 6 16H4.23529C3.97553 16 3.76471 15.7901 3.76471 15.5294V10.3529H3.29413C1.99623 10.3529 0.941175 9.29783 0.941175 7.99995V7.52937H0.470592C0.210825 7.52936 0 7.31947 0 7.05877C0 6.799 0.210825 6.58818 0.470583 6.58818H0.941175V6.11759C0.941175 4.82064 1.99623 3.76464 3.29412 3.76464H7.99906C8.14023 3.76371 11.5031 3.7063 13.2264 0.26065ZM13.1765 2.08089C11.5539 4.10065 9.408 4.56559 8.47059 4.67289V9.44559C9.408 9.55289 11.5539 10.0169 13.1765 12.0376V2.08089ZM7.52942 4.70583H3.29412C2.51577 4.70583 1.88235 5.33925 1.88235 6.11759V7.99995C1.88235 8.7783 2.51577 9.41172 3.29412 9.41172H7.52942V4.70583ZM14.1177 5.73453V8.38395C14.6645 8.18913 15.0588 7.67148 15.0588 7.05878C15.0588 6.44607 14.6645 5.92936 14.1177 5.73453Z" fill="black" />
                            </svg>
                            <div class="ToDoSidebarItem__Info">
                                <div class="ToDoSidebarItem__Title">
                                    <a href="/courses/1946/assignments/33777" className="view-link">
                                        <span className="link-style">Milestone 4 - Analysis and Design</span>
                                    </a>
                                </div>
                                <span className="course-link-style">[23_SEM1_CS415_B] - Software Engineering</span>
                                <ul className="view-block">
                                    <li className="inlineListItem">15 points
                                        <span className="inlineListItem__delimiter">
                                        </span>
                                    </li>
                                    <li className="inlineListItem">18 Nov at 23:59
                                    <span className="inlineListItem__delimiter"></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="ToDoSidebarItem__Close"><span class="css-btw693-closeButton">
                            </span>
                            </div>
                        </div>
                    </li>
                    <li className="listItem">
                        <div class="ToDoSidebarItem">
                            <svg className="ToDoSidebarItemSvg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2264 0.26065C13.3224 0.0648919 13.5369 -0.0367581 13.7553 0.0121835C13.968 0.0630085 14.1177 0.252184 14.1177 0.470534V4.75383C15.1906 4.97218 16 5.92278 16 7.05878C16 8.19478 15.1906 9.1463 14.1177 9.36465V13.647C14.1177 13.8654 13.968 14.0555 13.7553 14.1054C13.7198 14.1136 13.6835 14.1177 13.6471 14.1176C13.4711 14.1176 13.3073 14.0197 13.2264 13.8578C11.4937 10.3934 8.03483 10.3529 8 10.3529H4.70588V15.0588H5.43718C5.33835 14.3077 5.29129 13.0004 5.96612 12.1364C6.40283 11.5774 7.04659 11.2941 7.88235 11.2941V12.2352C7.34493 12.2352 6.96093 12.3924 6.70871 12.7143C6.13553 13.4465 6.33318 14.9129 6.45647 15.4164C6.4913 15.5567 6.4593 15.7054 6.37083 15.8193C6.28141 15.9331 6.144 16 6 16H4.23529C3.97553 16 3.76471 15.7901 3.76471 15.5294V10.3529H3.29413C1.99623 10.3529 0.941175 9.29783 0.941175 7.99995V7.52937H0.470592C0.210825 7.52936 0 7.31947 0 7.05877C0 6.799 0.210825 6.58818 0.470583 6.58818H0.941175V6.11759C0.941175 4.82064 1.99623 3.76464 3.29412 3.76464H7.99906C8.14023 3.76371 11.5031 3.7063 13.2264 0.26065ZM13.1765 2.08089C11.5539 4.10065 9.408 4.56559 8.47059 4.67289V9.44559C9.408 9.55289 11.5539 10.0169 13.1765 12.0376V2.08089ZM7.52942 4.70583H3.29412C2.51577 4.70583 1.88235 5.33925 1.88235 6.11759V7.99995C1.88235 8.7783 2.51577 9.41172 3.29412 9.41172H7.52942V4.70583ZM14.1177 5.73453V8.38395C14.6645 8.18913 15.0588 7.67148 15.0588 7.05878C15.0588 6.44607 14.6645 5.92936 14.1177 5.73453Z" fill="black" />
                            </svg>
                            <div class="ToDoSidebarItem__Info">
                                <div class="ToDoSidebarItem__Title">
                                    <a href="/courses/1946/assignments/33777" className="view-link">
                                        <span className="link-style">Milestone 4 - Analysis and Design</span>
                                    </a>
                                </div>
                                <span className="course-link-style">[23_SEM1_CS415_B] - Software Engineering</span>
                                <ul className="view-block">
                                    <li className="inlineListItem">15 points
                                        <span className="inlineListItem__delimiter">
                                        </span>
                                    </li>
                                    <li className="inlineListItem">18 Nov at 23:59
                                    <span className="inlineListItem__delimiter"></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="ToDoSidebarItem__Close"><span class="css-btw693-closeButton">
                            </span>
                            </div>
                        </div>
                    </li>
                    <li className="listItem">
                        <div class="ToDoSidebarItem">
                            <svg className="ToDoSidebarItemSvg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2264 0.26065C13.3224 0.0648919 13.5369 -0.0367581 13.7553 0.0121835C13.968 0.0630085 14.1177 0.252184 14.1177 0.470534V4.75383C15.1906 4.97218 16 5.92278 16 7.05878C16 8.19478 15.1906 9.1463 14.1177 9.36465V13.647C14.1177 13.8654 13.968 14.0555 13.7553 14.1054C13.7198 14.1136 13.6835 14.1177 13.6471 14.1176C13.4711 14.1176 13.3073 14.0197 13.2264 13.8578C11.4937 10.3934 8.03483 10.3529 8 10.3529H4.70588V15.0588H5.43718C5.33835 14.3077 5.29129 13.0004 5.96612 12.1364C6.40283 11.5774 7.04659 11.2941 7.88235 11.2941V12.2352C7.34493 12.2352 6.96093 12.3924 6.70871 12.7143C6.13553 13.4465 6.33318 14.9129 6.45647 15.4164C6.4913 15.5567 6.4593 15.7054 6.37083 15.8193C6.28141 15.9331 6.144 16 6 16H4.23529C3.97553 16 3.76471 15.7901 3.76471 15.5294V10.3529H3.29413C1.99623 10.3529 0.941175 9.29783 0.941175 7.99995V7.52937H0.470592C0.210825 7.52936 0 7.31947 0 7.05877C0 6.799 0.210825 6.58818 0.470583 6.58818H0.941175V6.11759C0.941175 4.82064 1.99623 3.76464 3.29412 3.76464H7.99906C8.14023 3.76371 11.5031 3.7063 13.2264 0.26065ZM13.1765 2.08089C11.5539 4.10065 9.408 4.56559 8.47059 4.67289V9.44559C9.408 9.55289 11.5539 10.0169 13.1765 12.0376V2.08089ZM7.52942 4.70583H3.29412C2.51577 4.70583 1.88235 5.33925 1.88235 6.11759V7.99995C1.88235 8.7783 2.51577 9.41172 3.29412 9.41172H7.52942V4.70583ZM14.1177 5.73453V8.38395C14.6645 8.18913 15.0588 7.67148 15.0588 7.05878C15.0588 6.44607 14.6645 5.92936 14.1177 5.73453Z" fill="black" />
                            </svg>
                            <div class="ToDoSidebarItem__Info">
                                <div class="ToDoSidebarItem__Title">
                                    <a href="/courses/1946/assignments/33777" className="view-link">
                                        <span className="link-style">Milestone 4 - Analysis and Design</span>
                                    </a>
                                </div>
                                <span className="course-link-style">[23_SEM1_CS415_B] - Software Engineering</span>
                                <ul className="view-block">
                                    <li className="inlineListItem">15 points
                                        <span className="inlineListItem__delimiter">
                                        </span>
                                    </li>
                                    <li className="inlineListItem">18 Nov at 23:59
                                    <span className="inlineListItem__delimiter"></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="ToDoSidebarItem__Close"><span class="css-btw693-closeButton">
                            </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ToDo