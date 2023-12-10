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


function Module() {
      const token = JSON.parse(localStorage.getItem('token'))
      const { courseID } = useParams()
      const { file_id } = useParams()
      const [file_url, setFileUrl] = useState();
      const [file_name, setFileName] = useState();
      const [file_type, setFileType] = useState();
      if (token == null){    
            window.history.replaceState(null, '', '/Login');
            window.location.reload();
        }

      useEffect(() => {
            const fetchFile = async () => {
                  try {
                        const response = await fetch(`http://localhost:8080/api/files/${file_id}/`,{
                              method: 'GET',
                              headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': 'Token ' + token
                              },
                          });
                        const data = await response.json();
                        console.log("file id")
                        setFileUrl(data.file)
                        setFileName(data.name)
                        setFileType(data.file_type)
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
                                          <h2> {file_name}</h2>
                                          <div className="doc-preview">
                                                <div className="left-doc">
                                                      {file_type === '.pdf' || file_type === '.docx' || file_type === '.doc' || file_type === '.txt' ? (
                                                            <>
                                                                  <FileViewer fileUrl={file_url} />
                                                            </>
                                                      ) : file_type === '.mp4' || file_type === '.mov' || file_type === '.avi' || file_type === '.wmv' ? (
                                                            <VideoPlayer />
                                                      ) : null}
                                                </div>
                                          </div>
                                          <div className="sequence-footer"></div>
                                    </div>
                              </div>
                              <div className="iac-main-right-side-wrapper">
                                    {/* <RightSide /> */}
                                    <div className="side-aid-section">
                                          <div >
                                                {file_type === '.pdf' || file_type === '.docx' || file_type === '.doc' || file_type === '.txt' ? (
                                                      <>
                                                            <TextSpeech />
                                                            <div className="summarize-section">
                                                                  <button className='btn button-sidebar-wide'>Summarize</button>
                                                                  <div className="summary">
                                                                        <div className="Box">
                                                                              <label> Summary</label>
                                                                              <div className="summary-box">
                                                                                    <div className="summary-text"> Summary </div>
                                                                                    <span className="box-bottom">0 words</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
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