// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import pdfjs from 'pdfjs-dist';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function PDFViewer() {
//   const [numPages, setNumPages] = useState(null);
//   const [pdfText, setPdfText] = useState('');

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
    
//     // Extract text from each page
//     const textPromises = [];
//     for (let i = 1; i <= numPages; i++) {
//       textPromises.push(
//         pdfjs.getDocument({ url: 'path/to/pdf/file.pdf' })
//           .then((pdf) => pdf.getPage(i))
//           .then((page) => page.getTextContent())
//           .then((textContent) => {
//             const pageText = textContent.items.map((item) => item.str).join(' ');
//             return pageText;
//           })
//       );
//     }

//     Promise.all(textPromises)
//       .then((pageTexts) => {
//         const extractedText = pageTexts.join(' ');
//         setPdfText(extractedText);
//       })
//       .catch((error) => console.error('Failed to extract PDF text:', error));
//   };

//   return (
//     <div>
//       <Document
//         file="../../src/test_media/Final_Poster.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         {Array.from(new Array(numPages), (el, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//       <div>{pdfText}</div>
//     </div>
//   );
// };

// export default PDFViewer;