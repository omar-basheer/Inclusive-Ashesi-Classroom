import React from 'react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';
import '../styles/video_player.css'
import '../../node_modules/video-react/dist/video-react.css'
// import video from '../../../iac-backend/iac_django/media/files/VIDEO-2023-12-04-21-45-01.mp4'
import video from '../../src/test_media/VIDEO-2023-12-04-21-45-01.mp4'

function VideoPlayer() {
    return (
        <div className='player-container'>
            <Player
                playsInline
                poster="/assets/poster.png"
                src={video}
            />
        </div>
    );
};

export default VideoPlayer


            {/* <Player poster="/assets/poster.png">
                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                <source src="iac-app/iac-backend/iac_django/media/files/VIDEO-2023-12-04-21-45-01.mp4" />
                <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

                <ControlBar className='video-react video-react-control-bar'>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                </ControlBar>
            </Player> */}