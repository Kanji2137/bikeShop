import React, { useState } from "react";
import { Link } from "react-router-dom";

function StartPage() {
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
        <section className="startPage">
            <div className="startPage__box">
                <Link to="/cart/shop">
                    <video onMouseOver={playVideo} onMouseLeave={stopVideo} className="startPage__video" muted loop>
                                <source src="videos/bike-riding.mp4" type="video/mp4"/>
                                <source src="videos/video.webm" type="video/webm"/>
                                Your browser is not supported!
                    </video>
                    <h1>Service</h1>
                </Link>
            </div>
            <div className="startPage__box">
                <Link to="/cart/shop">
                    <video onMouseOver={playVideo} onMouseLeave={stopVideo} className="startPage__video" muted loop>
                                <source src="videos/bike-service.mp4" type="video/mp4"/>
                                <source src="videos/video.webm" type="video/webm"/>
                                Your browser is not supported!
                    </video>
                    <h1>Shop</h1>
                </Link>
            </div>
        </section>
    )
}

export default StartPage;