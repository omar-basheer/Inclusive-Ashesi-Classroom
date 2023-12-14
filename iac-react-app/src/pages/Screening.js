/**
 * Represents the Screening page component.
 * @component
 */
import React from "react";
import '../styles/global.css'
import '../styles/right_side.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";


function Screening() {
    const Title = "Screening Form";

    const navigate = useNavigate();

    // Function to handle fetching data from the Google Spreadsheet
    const fetchDataFromSpreadsheet = async () => {
        try {
            // Fetch data from the Google Spreadsheet

            fetch('https://sheetdb.io/api/v1/h3yuvplnjy1gs')
            .then((response) => response.json())
            .then((data) => console.log(data));

            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formContent = `
        <h3>Hi there...</h3>
        <p><span className="pstyle">Welcome to our inclusive learning community! At Ashesi University, we are committed to ensuring that everyone has the support they need to thrive in their learning journey. Your unique experiences and preferences are essential to us.</span></p>
        <h3>About the Dyslexia Screening Form...</h3>
        <p><span className="pstyle">We invite you to participate in our Dyslexia Screening Form. This brief questionnaire is designed to help us understand more about your individual strengths and learning preferences. Your insights will guide us in providing tailored support that aligns with your needs.</span></p>
        <h3>Your Privacy Matters...</h3>
        <p><span className="pstyle">So rest assured, all the information you provide is strictly confidential. Your privacy is our priority, and your responses will only be used to enhance our support services.</span></p>
        <h3>Get Started: </h3>

        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeJ9dlsQpzdP9dWEGrcHyOOnEn_BJFK7Y0RU_V7pcs5ec1nKQ/viewform" 
            width="100%" 
            height="700" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
        >Loading...</iframe>
    `;

    const buttonContent = (
        <a class="btn2 button-sidebar-wide" onClick={fetchDataFromSpreadsheet}>
                    <i class="icon-stats"></i>
                    Complete Form Submission
                </a>
    );

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <PageContent 
                                contentTitle={Title}
                                richContent={formContent}
                            />
                            {buttonContent}
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

export default Screening;
