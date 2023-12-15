import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import '../../styles/courses.css'
import "../../styles/text_module.css"
import "../../styles/right_side.css"
import Sidemenu from "../../components/Sidemenu";
import RightSide from "../../components/RightSide";
import TextSpeech from "../../components/TextSpeech";
import VideoPlayer from "../../components/VideoPlayer";
import FileViewer from "../../components/FileViewer";
import PageContent from "../../components/PageContent";
import Summarizer from "../../components/Summarizer";
import { fetchModuleFile, fetchModuleLesson } from "../../services/services";


/**
 * Represents a module component.
 *
 * @returns {JSX.Element} The module component.
 */
function Module() {
    const token = JSON.parse(localStorage.getItem('token'))
    const [exportedTextContent, setExportedTextContent] = useState('');
    if (token == null) {
        window.history.replaceState(null, '', '/Login');
        window.location.reload();
    }
    const { course_id } = useParams()
    const { file_id } = useParams()
    const { lesson_id } = useParams()
    const [file_url, setFileUrl] = useState();
    const [file_name, setFileName] = useState();
    const [file_type, setFileType] = useState();
    const [lesson_title, setLessonTitle] = useState();
    const [lesson_content, setLessonContent] = useState();
    const [tts_content, setTTSContent] = useState();

    useEffect(() => {
        if (file_id) {
            fetchModuleFile(file_id, token, setFileUrl, setFileName, setFileType);
        }
    }, [file_id])
    useEffect(() => {
        if (lesson_id) {
            console.log("fetching lesson")
            fetchModuleLesson(lesson_id, token, setLessonTitle, setLessonContent);
        }
    }, [lesson_id])

    useEffect(() => {
        if (lesson_content !== undefined) {
            const tts = lesson_content.replace(/<[^>]+>/g, '');
            const formattedText = tts.replace(/([.!?])\s*(?=[A-Z])/g, "$1\n");

            const parser = new DOMParser();

            // Parse the HTML
            const parsedHtml = parser.parseFromString(formattedText, 'text/html');

            // Access the text content
            // setExportedTextContent(parsedHtml.body.textContent);
            setExportedTextContent(parsedHtml.body.textContent);
            console.log(exportedTextContent);
            
        }
    }, [lesson_content]);

    useEffect(() => {
        console.log('"'+ exportedTextContent +'"')
      }, [exportedTextContent] )

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu course_id={course_id} />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <h2> {file_name} </h2>
                            <div className="doc-preview">
                                <div className="left-doc">
                                    {file_type === '.pdf' || file_type === '.docx' || file_type === '.doc' ? (
                                        <>
                                            <FileViewer fileUrl={file_url} />
                                        </>
                                    ) : file_type === '.mp4' || file_type === '.mov' || file_type === '.avi' || file_type === '.wmv' ? (
                                        <VideoPlayer />
                                    ) : lesson_id != null ? (
                                        <>
                                            <PageContent contentTitle={lesson_title} richContent={lesson_content}
                                            />
                                        </>
                                    ) : null}
                                </div>
                            </div>
                            <div className="sequence-footer" ></div>
                        </div>
                    </div>
                    <div className="iac-main-right-side-wrapper">
                        {/* <RightSide /> */}
                        <div className="side-aid-section">
                            <div >
                                {lesson_id != null ? (
                                    <>
                                        <TextSpeech speech_text={exportedTextContent} />
                                        <Summarizer summary_text={exportedTextContent}/>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Module