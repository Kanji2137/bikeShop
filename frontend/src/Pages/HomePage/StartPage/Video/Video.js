import React, {useState} from 'react';

function Video ({path1, path2, text}) {
    const [isPlay, setPlay] = useState(true);

    function playVideo(e) {
        if(!isPlay) e.target.play();
        setPlay(true);
    }
    function stopVideo(e) {
        if(isPlay){
            e.target.pause();
            setPlay(false);
        }
    }
    return (
        <>
            <video onMouseOver={playVideo} onMouseLeave={stopVideo} className="startPage__video" muted loop>
                <source src={path1} type="video/mp4"/>
                <source src={path2} type="video/webm"/>
                Your browser is not supported!
            </video>
            <h1>{text}</h1>
        </>
    );
}

export default Video;