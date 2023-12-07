import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import pdfUrl from '../../src/test_media/Alg-Assignment-04-2023_1.pdf';
// import pdfUrl from '../../src/test_media/Final_Poster.pdf';
import pdfUrl from '../../src/test_media/Alg-Assignment-04-2023_1.pdf';


function FileViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <div style={{
                    height: "750px",
                    width: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>
                    <Viewer
                        fileUrl={pdfUrl}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>

            </Worker>
        </div>
    );
};

export default FileViewer;