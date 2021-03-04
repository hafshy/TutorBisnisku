import React, { useEffect } from "react";
import Video from "../../videos/video.mp4";

const VideoSection = () => {
    // useEffect(() => {
    //     AOS.init();
    // }, [])

    return (
        <div className="video-section">
            <h1>Our Video</h1>
            <div className="video-wrapper">
                <div className="video-container" data-aos="flip-left">
                    <video src={Video} autoPlay controls/>
                </div>
                <div className="desc-container">
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </div>
                    <a href="https://wa.me/message/WHABKDM5XLPME1">Buy Video</a>
                </div>
            </div>
            <div className="video-wrapper reverse">
                <div className="desc-container">
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </div>
                    <a href="https://wa.me/message/WHABKDM5XLPME1">Buy Video</a>
                </div>
                <div className="video-container" data-aos="flip-left">
                    <video src={Video} autoPlay controls />
                </div>
            </div>
            <div className="video-wrapper">
                <div className="video-container" data-aos="flip-left">
                    <video src={Video} autoPlay controls/>
                </div>
                <div className="desc-container">
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </div>
                    <a href="https://wa.me/message/WHABKDM5XLPME1">Buy Video</a>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
