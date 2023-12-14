import React, { useContext, useState, useEffect } from "react";
import '../styles/global.css'
import '../styles/right_side.css'
import { useNavigate } from 'react-router-dom';
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import RightSide from "../components/RightSide";

function Screening() {
    const Title = "Screening Form";
    const student_id = JSON.parse(localStorage.getItem('student_id'));
    const [recommendations, setRecommendations] = useState([]);
    const [showFlashMessage, setShowFlashMessage] = useState(false);

    const navigate = useNavigate();

    // Function to handle fetching data from the Google Spreadsheet
    const fetchDataFromSpreadsheet = async () => {
        try {
            const response = await fetch('https://sheetdb.io/api/v1/furjhzg2u7fjt/search?StudentID=' + student_id);
            const data = await response.json();
    
            if (data && data.length > 0) {
                const challenges = data[0]["Do you experience any challenges with the following? (Select as many that apply)"];
                const challengesArray = challenges.split(',').map(item => item.trim());
    
                let recommendations = generateRecommendations(challengesArray);
                const keyToExtract = "";
                recommendations = recommendations[keyToExtract];
                
    
                // Update the state here
                setRecommendations(recommendations);
                setShowFlashMessage(true);
            } else {
                console.log('No data found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Add a click event listener to the document body
        const handleBodyClick = () => {
            // Hide the flash message when clicking anywhere on the page
            setShowFlashMessage(false);
        };

        // Attach the event listener
        document.body.addEventListener('click', handleBodyClick);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    // Function to generate recommendations based on challenges
    const generateRecommendations = (challengesArray) => {
        const recommendations = [];

         // Helper function to add a feature to recommendations
        const addFeature = (challenge, feature) => {
        if (!recommendations[challenge]) {
            recommendations[challenge] = [feature];
        } else if (!recommendations[challenge].includes(feature)) {
            recommendations[challenge].push(feature);
        }
    };
    
    if (challengesArray.includes('Difficulty sustaining attention in tasks')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Lesson Summarizer');
    }

    if (challengesArray.includes('Frequent careless mistakes in schoolwork')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Avoiding or strongly disliking tasks that require sustained mental effort')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Fidgeting with hands or feet or squirming in one\'s seat')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Inability to remain seated in situations where it is expected')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Difficulty waiting one\'s turn')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Blurting out answers before questions have been completed')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Difficulty recognizing and decoding words')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Lesson Summarizer');
    }

    if (challengesArray.includes('Frequent mispronunciation of words')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Struggling to read aloud with accuracy and fluency.')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Frequent spelling errors, even with common words')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Difficulty organizing thoughts in writing')) {
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    if (challengesArray.includes('Poor handwriting')) {
        addFeature(recommendations, 'Text-to-Speech');
        addFeature(recommendations, 'Lesson Summarizer');
        addFeature(recommendations, 'Closed Captions');
    }

    
        return recommendations;
    };
    const flashMessageContent = (
        showFlashMessage && (
            <div className="flash-message-container1" aria-hidden="true">
                <div className="ic-flash__icon"></div>
                <p>Hi there, here are your recommendations:</p>
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            </div>
        )
    );
    
    

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
        <a className="btn2 button-sidebar-wide" onClick={fetchDataFromSpreadsheet}>
            <i className="icon-stats"></i>
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
                        {flashMessageContent}
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
