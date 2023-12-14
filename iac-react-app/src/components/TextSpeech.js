import React from 'react';
import Speech from 'react-text-to-speech';
import "../styles/global.css"

/**
 * Renders a TextSpeech component.
 *
 * @returns {JSX.Element} The rendered TextSpeech component.
 */
function TextSpeech({speech_text}) {
    const startBtn = <button className='btn button-sidebar-wide'>Start Speech</button>
    const pauseBtn = <button className='btn button-sidebar-wide'>Pause Speech</button>
    const stopBtn = <button className='btn button-sidebar-wide'>Stop Speech</button>

    return <Speech 
        text={speech_text}
        pitch={1.5}
        rate={1.1}
        volume={1}
        startBtn={startBtn}
        pauseBtn={pauseBtn}
        stopBtn={stopBtn}
        props={{ title: 'React Text-To-Speech Component' }}
        onError={() => console.error('Browser not supported!')}
    />
}

export default TextSpeech