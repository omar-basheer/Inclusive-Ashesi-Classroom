import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import '../../styles/courses.css'
import "../../styles/text_module.css"
import "../../styles/right_side.css"
import Sidemenu from "../../components/Sidemenu";
import RightSide from "../../components/RightSide";
import FileViewer from "../../components/FileViewer";
import Test from "../../components/PDFViewer";
import TextSpeech from "../../components/TextSpeech";
import PdfViewer from "../../components/PDFViewer";
import DocViewer from "../../components/DocViewer";

function TextModule() {
    const { courseID } = useParams()
    const { file_id } = useParams()
    const [file_url, setFileUrl] = useState([]);
    const [name, setFileName] = useState([]);
    const pdfUrl = '../../src/test_media/Alg-Assignment-04-2023_1.pdf'
    const docUrl = '/Users/admin/Library/CloudStorage/OneDrive-AshesiUniversity/Ashesi University/ashesi_year_3/sem2/software_engineering/IAC/iac-app/iac-react-app/src/test_media/AgileWizards_Milestone5.docx'

    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/files/${file_id}/`);
                const data = await response.json();
                console.log("file id")
                setFileUrl(data.file)
                setFileName(data.name)
            } catch (error) {
                console.error('Error fetching file', error);
            }
        };

        fetchFile();
    }, [file_id]);

    return (
        <div className="iac-app">
            <div className="iac-layout-columns">
                <div className="iac-main-app-content">
                    <Sidemenu
                        courseID={courseID}
                    />
                    <div className="iac-main-content-wrapper">
                        <div className="iac-main-content">
                            <h2> {name}</h2>
                            <div className="doc-preview">
                                <div className="left-doc">
                                    <FileViewer
                                        fileUrl={file_url}
                                    />
                                    {/* <DocViewer 
                                    documentUrl={docUrl}/> */}
                                </div>
                            </div>
                            <div className="sequence-footer"></div>
                        </div>
                    </div>
                    <div className="iac-main-right-side-wrapper">
                        {/* <RightSide /> */}
                        <div className="side-aid-section">
                            <div >
                                <TextSpeech />
                                <div className="summarize-section">
                                    <button className='btn button-sidebar-wide'>Summarize</button>
                                    <div  className="summary">
                                        <div className="Box">
                                            {/* <label> Summary</label> */}
                                            <div className="summary-box">
                                                <div className="summary-text"> Summary </div>
                                                <span className="box-bottom">0 words</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextModule