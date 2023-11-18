import React from "react";
import "../../styles/global.css"
import "../PageContent/page_content.css"

function PageContent(){
    return(
        <div className="course-home-content">
        <div className="title-bar-outer-container">
            <div className="sticky-toolbar">
                <div className="page-toolbar">
                    <div className="page-toolbar-start">
                        <div className="page-heading">
                            <h1 className="course-title">[23_SEM1_CS415_B] - Software Engineering</h1>
                        </div>
                    </div>
                    <div className="page-toolbar-end"></div>
                </div>
            </div>
        </div>
        <div className="show-content">
            <div className="content">
                <p></p>
                <div className="rich-content"></div>
                <div class="RichContent">
                    <h3><strong>Introduction:</strong></h3>
                    <p><span className="pstyle">Hi Students.</span></p>
                    <p><span className="pstyle">I am David&nbsp;<strong>Ebo&nbsp;</strong>Adjepon-Yamoah, your instructor for this course. Mr. Akwasi Appiagyei Asante-Krobea will be my Faculty Intern. I have been teaching this course for the past six years and have made each year's experience a bit different. This year will be no different. This year, the course will be taught using a pedagogical approach called <strong>Experiential Learning</strong>. This approach is very similar to project-based learning but it empahsises on a <em>do-reflect/review-insights</em>&nbsp;process. Also, there will be a lot of activities that will be done to enrich the learning process. Activities like lectures, labs, student-led lectures/discussions, invited guests, team-work, presentations, idea incubation, mentorships, etc.&nbsp;</span></p>
                    <p><span className="pstyle">We will be using the following platforms so make sure that your download (if applicable) and register with them:</span></p>
                    <ul>
                        <li><span className="pstyle">Trello (Agile Project Management Tool)</span></li>
                        <li><span className="pstyle">Figma (System Design Tool - UI/UX)</span></li>
                        <li><span className="pstyle">CANVA (Image Design Tool)</span></li>
                        <li><span className="pstyle">GitHub (Collaborative Code Versioning and Documentation Tool)</span></li>
                        <li><span className="pstyle">Testing Tools (JUnit, Selenium, PostMan)</span></li>
                    </ul>
                    <p><span className="pstyle">From you, I will require your consistent participation and effort. Let's make this course a very enjoyable one.&nbsp;</span></p>
                    <p><span className="pstyle"><strong><em>Ashesi’s mission is to educate a new generation of ethical entrepreneurial leaders in Africa and to cultivate in students, the critical thinking skills, concern for others and the courage it will take to transform a continent</em></strong>.&nbsp;</span></p>
                    <p><span className="pstyle">We will be using artificial intelligence (i.e., ChatGPT and Bard) to assist the learning process, but it should not be used to get assistance for any class assignments, lab exercises, quizzes, projects and examinations, unless otherwise stated. In short, observe the&nbsp;<strong>honour code</strong>&nbsp;and keep it holy.&nbsp;</span></p>
                    <p><span className="pstyle">My warmest wishes and success in this course!</span></p>
                    {/* <h3><span className="pstyle"><strong>Getting Started</strong></span></h3> */}
                    {/* <p><strong>Kindly visit the links below to get started.</strong></p> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default PageContent