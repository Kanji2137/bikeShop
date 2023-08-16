import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video/Video";

function StartPage() {

    return (
        <section className="startPage">
            <div className="startPage__box">
                <Link to="/service">
                    <Video path1="videos/bike-riding.mp4" path2="videos/video.webm" text="Service"/>
                </Link>
            </div>
            <div className="startPage__box">
                <Link to="/cart/shop">
                    <Video path1="videos/bike-service.mp4" path2="videos/video.webm" text="Shop"/>
                </Link>
            </div>
        </section>
    )
}

export default StartPage;