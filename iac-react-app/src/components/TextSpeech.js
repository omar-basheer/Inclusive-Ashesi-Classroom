import React from 'react';
import Speech from 'react-text-to-speech';
import "../styles/global.css"

function TextSpeech() {
    const startBtn = <button className='btn button-sidebar-wide'>Start Speech</button>
    const pauseBtn = <button className='btn button-sidebar-wide'>Pause Speech</button>
    const stopBtn = <button className='btn button-sidebar-wide'>Stop Speech</button>

    return <Speech 
        // text='This is a partially customized speech component.'
        text='
        Instructions
        • You may complete and submit Assignment 4 in your study groups.
        • Although you are working on it as a group, it is important for each person to fully
        participate in the discussions and understand the work done.
        Preparation
        * Study the relevant sections of Chapters 9 & 10 of the textbook by Levitin (on the Greedy and
        Iterative Improvement Paradigms respectively).
        - PART A: Basic Practice with Key Algorithms
        > Problem 1 [3 points]: Greedy Algorithms: Prim’s Algorithm
        * Execute Prim’s algorithm to find the minimum spanning tree of the graph below. Break any
        ties among nodes alphabetically.
        Problem 2 [3 points]: Greedy Algorithms: Kruskal’s Algorithm
        * Execute Kruskal’s algorithm to find the minimum spanning tree of the graph below. Break
        any ties among nodes alphabetically.
        Problem 3 [3 points]: Greedy Algorithms: Dijkstra’s Algorithm
        Execute Dijkstra’s algorithm on the graph below, using vertex a as the source vertex. Break.'
        pitch={1.5}
        rate={1.2}
        volume={1}
        startBtn={startBtn}
        pauseBtn={pauseBtn}
        stopBtn={stopBtn}
        props={{ title: 'React Text-To-Speech Component' }}
        onError={() => console.error('Browser not supported!')}
    />
}

export default TextSpeech