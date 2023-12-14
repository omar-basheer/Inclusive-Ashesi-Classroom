import React from 'react';
import '../styles/global.css'
import "../styles/collapsible.css"
import { Link, useParams } from 'react-router-dom';

function getFileTypeIcon(fileType) {
    const iconMap = {
        '.pdf': (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2351 0V4.70582H11.2939V0.941167H0.941167V15.0586H11.2939V13.1763H12.2351V15.9998H0V0H12.2351ZM13.3137 4.84426C13.4982 4.65979 13.7956 4.65979 13.98 4.84426L15.8624 6.72658C16.0459 6.91011 16.0459 7.20752 15.8624 7.39198L10.2154 13.039C10.1269 13.1265 10.0074 13.1764 9.88221 13.1764H7.99987C7.74012 13.1764 7.5293 12.9656 7.5293 12.7058V10.8235C7.5293 10.6983 7.57918 10.5788 7.66672 10.4912L13.3137 4.84426ZM12.0196 7.46916L8.47047 11.0183V12.2352H9.68738L13.2365 8.68608L12.0196 7.46916ZM5.64697 10.3529V11.2941H2.8235V10.3529H5.64697ZM7.52931 8.47055V9.41172H2.82348V8.47055H7.52929H7.52931ZM13.6469 5.84188L12.685 6.80376L13.9019 8.02068L14.8638 7.05882L13.6469 5.84188ZM9.41162 2.82358V6.58823H2.8235V2.82358H9.41162ZM8.47046 3.76475H3.76466V5.64707H8.47047V3.76475H8.47046Z" fill="#6D6E70" fill-opacity="0.905882" />
            </svg>
        ),
        '.txt': (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2351 0V4.70582H11.2939V0.941167H0.941167V15.0586H11.2939V13.1763H12.2351V15.9998H0V0H12.2351ZM13.3137 4.84426C13.4982 4.65979 13.7956 4.65979 13.98 4.84426L15.8624 6.72658C16.0459 6.91011 16.0459 7.20752 15.8624 7.39198L10.2154 13.039C10.1269 13.1265 10.0074 13.1764 9.88221 13.1764H7.99987C7.74012 13.1764 7.5293 12.9656 7.5293 12.7058V10.8235C7.5293 10.6983 7.57918 10.5788 7.66672 10.4912L13.3137 4.84426ZM12.0196 7.46916L8.47047 11.0183V12.2352H9.68738L13.2365 8.68608L12.0196 7.46916ZM5.64697 10.3529V11.2941H2.8235V10.3529H5.64697ZM7.52931 8.47055V9.41172H2.82348V8.47055H7.52929H7.52931ZM13.6469 5.84188L12.685 6.80376L13.9019 8.02068L14.8638 7.05882L13.6469 5.84188ZM9.41162 2.82358V6.58823H2.8235V2.82358H9.41162ZM8.47046 3.76475H3.76466V5.64707H8.47047V3.76475H8.47046Z" fill="#6D6E70" fill-opacity="0.905882" />
            </svg>
        ),
        '.mp4': (
            <svg width="17" height="17" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88 0H0V64H28V72H60V64H87.96L88 0ZM80 56H8V8H80V56ZM60 32L32 48V16L60 32Z" fill="#6D6E70" fillOpacity="0.68" />
            </svg>
        )
    }
    return iconMap[fileType] || (
        <svg width="17" height="17" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Default icon */}
            <path d="M88 0H0V64H28V72H60V64H87.96L88 0ZM80 56H8V8H80V56ZM60 32L32 48V16L60 32Z" fill="#6D6E70" fillOpacity="0.68" />
        </svg>
    )
}


/**
 * Renders a collapsible module component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.moduleDescription - The description of the module.
 * @param {Array} props.files - The array of files associated with the module.
 * @returns {JSX.Element} The rendered Collapsible component.
 */
function Collapsible({ moduleDescription, files, lessons }) {
    const { course_id } = useParams();

    const getModuleType = (fileType) => {
        // Map file types to module types
        const moduleTypeMappings = {
          '.pdf': 'Doc',
          '.doc': 'Doc',
          '.mp4': 'Video',
        };

        return moduleTypeMappings[fileType] || 'default';
      };

    return (
        <div className='condensed-module'>
            <div className='c-header'>
                <span className='c-header-title'>
                    <i className='mini-dropdown-icon'>
                        <svg width="7" height="5" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L20 20L40 0H0Z" fill="#666666" />
                        </svg>
                    </i>
                    <span className='name'>{moduleDescription}</span>
                </span>
            </div>
            <div className='module-content'>
                {files.map((file, index) => (
                    <ul className='list-items' key={index}>
                        <li>
                            <div className='item-row'>
                                <span>
                                    <span className='type-icon'>
                                        <i className='icon'>
                                            {getFileTypeIcon(file.file_type)}
                                        </i>
                                    </span>
                                </span>
                                <div className='item-info'>
                                    <div className='item-title'>
                                        <span className='item-name'>
                                            {/* <Link className='item' to={`/${courseID}/Modules/${getModuleType(file.file_type)}/${file.file_id}`}> */}
                                            <Link className='item' to={`/${course_id}/Modules/file/${file.file_id}`}>
                                                {file.name}
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='item-details'>
                                        <div className='due-date-display'>30 Aug</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
                {lessons.map((lesson, index) => (
                    <ul className='list-items' key={index}>
                        <li>
                            <div className='item-row'>
                                <span>
                                    <span className='type-icon'>
                                        <i className='icon'>
                                            {getFileTypeIcon(lesson.lesson_file_type)}
                                        </i>
                                    </span>
                                </span>
                                <div className='item-info'>
                                    <div className='item-title'>
                                        <span className='item-name'>
                                            {/* <Link className='item' to={`/${courseID}/Modules/${getModuleType(file.file_type)}/${file.file_id}`}> */}
                                            <Link className='item' to={`/${course_id}/Modules/lesson/${lesson.lesson_id}`}>
                                                {lesson.lesson_name}
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='item-details'>
                                        <div className='due-date-display'>30 Aug</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}

                <div className='footer'></div>
            </div>
        </div>
    )
}

export default Collapsible



{/* <ul className='list-items'>
                    <li>
                        <div className='item-row'>
                            <span >
                                <span className='type-icon'>
                                    <i className='icon'>
                                        <svg width="17" height="17" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M88 0H0V64H28V72H60V64H87.96L88 0ZM80 56H8V8H80V56ZM60 32L32 48V16L60 32Z" fill="#6D6E70" fill-opacity="0.68" />
                                        </svg>
                                    </i>
                                </span>
                            </span>
                            <div className='item-info'>
                                <div className='item-title'>
                                    <span className='item-name'>
                                        <a className='item'>
                                            CS Capstone Explanatory Video
                                        </a>
                                    </span>
                                </div>
                                <div className='item-details'>
                                    <div className='due-date-display'>30 Aug</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className='list-items'>
                    <li>
                        <div className='item-row'>
                            <span >
                                <span className='type-icon'>
                                    <i className='icon'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2351 0V4.70582H11.2939V0.941167H0.941167V15.0586H11.2939V13.1763H12.2351V15.9998H0V0H12.2351ZM13.3137 4.84426C13.4982 4.65979 13.7956 4.65979 13.98 4.84426L15.8624 6.72658C16.0459 6.91011 16.0459 7.20752 15.8624 7.39198L10.2154 13.039C10.1269 13.1265 10.0074 13.1764 9.88221 13.1764H7.99987C7.74012 13.1764 7.5293 12.9656 7.5293 12.7058V10.8235C7.5293 10.6983 7.57918 10.5788 7.66672 10.4912L13.3137 4.84426ZM12.0196 7.46916L8.47047 11.0183V12.2352H9.68738L13.2365 8.68608L12.0196 7.46916ZM5.64697 10.3529V11.2941H2.8235V10.3529H5.64697ZM7.52931 8.47055V9.41172H2.82348V8.47055H7.52929H7.52931ZM13.6469 5.84188L12.685 6.80376L13.9019 8.02068L14.8638 7.05882L13.6469 5.84188ZM9.41162 2.82358V6.58823H2.8235V2.82358H9.41162ZM8.47046 3.76475H3.76466V5.64707H8.47047V3.76475H8.47046Z" fill="#6D6E70" fill-opacity="0.905882" />
                                        </svg>
                                    </i>
                                </span>
                            </span>
                            <div className='item-info'>
                                <div className='item-title'>
                                    <span className='item-name'>
                                        <a className='item'>
                                            Introduction to Inductive and Deductive Reasoning (Includes Activity)
                                        </a>
                                    </span>
                                </div>
                                <div className='item-details'>
                                    <div className='due-date-display'>30 Aug</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> */}