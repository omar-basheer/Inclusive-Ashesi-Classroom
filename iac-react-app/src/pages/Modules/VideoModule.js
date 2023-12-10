import React from "react";
import { useParams } from 'react-router-dom';
import "../../styles/global.css"
import '../../styles/courses.css'
import "../../styles/text_module.css"
import Sidemenu from "../../components/Sidemenu";
import VideoPlayer from "../../components/VideoPlayer";

import TextSpeech from "../../components/TextSpeech";
import FileViewer from "../../components/FileViewer";

function VideoModule() {
    const { courseID } = useParams()
    return (
        <div className="iac-app">
        <div className="iac-layout-columns">
            <div className="iac-main-app-content">
                <Sidemenu
                    courseID={courseID}
                />
                <div className="iac-main-content-wrapper">
                    <div className="iac-main-content">
                    <h2>Video Title</h2>
                        <div className="doc-preview">
                            <div className="left-doc">
                            <VideoPlayer />
                            </div>
                        </div>
                        <div className="sequence-footer"></div>
                    </div>
                </div>
                <div className="iac-main-right-side-wrapper">
                    {/* <RightSide /> */}
                    <div className="side-aid-section">
                        <div >
                            {/* <TextSpeech /> */}
                            {/* <button className='btn button-sidebar-wide'>Start Speech</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default VideoModule

