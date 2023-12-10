import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import pdfUrl from '../../src/test_media/Alg-Assignment-04-2023_1.pdf';
// import pdfUrl from '../../src/test_media/Final_Poster.pdf';
// import pdfUrl from '../../src/test_media/AgileWizards_Milestone5.docx';
import Test from './PDFViewer';




function FileViewer({ fileUrl }) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pdfUrl = '/Users/admin/Library/CloudStorage/OneDrive-AshesiUniversity/Ashesi University/ashesi_year_3/sem2/software_engineering/IAC/iac-app/iac-backend/iac_django/media/files/AgileWizards_Milestone4.pdf'

    return (
        <div>
            {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}> */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div style={{ height: '650px' }}>
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