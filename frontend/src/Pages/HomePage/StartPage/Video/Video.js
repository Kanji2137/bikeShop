import React, { useState, useEffect } from "react";

function Video({ path1, path2, path3, path4, text }) {
    const [isPlay, setPlay] = useState(true);
    const [height, setHeight] = useState(window.innerHeight);

    function playVideo(e) {
        if (!isPlay) e.target.play();
        setPlay(true);
    }
    function stopVideo(e) {
        if (isPlay) {
            e.target.pause();
            setPlay(false);
        }
    }

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    const Resolution = (height, path1, path2, path3) => {
        if(height < 520) {
            return <source src={path1} type="video/mp4" />
        } else if (height < 800) {
            return <source src={path2} type="video/mp4" />
        } else {
            return <source src={path3} type="video/mp4" />
        }
    }

    return (
        <>
            <video
                onMouseOver={playVideo}
                onMouseLeave={stopVideo}
                className="startPage__video"
                muted
                loop
            >
                {Resolution(height, path1, path2, path3)}
                <source src={path4} type="video/webm" />
                Your browser is not supported!
            </video>
            <h1>{text}</h1>
        </>
    );
}

export default Video;
