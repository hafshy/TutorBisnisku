import React, { useEffect } from "react";

const VideoSection = () => {
    // useEffect(() => {
    //     AOS.init();
    // }, [])

    return (
        <div className="video-section">
            <h1>Upcoming Events</h1>

            <div className="video-wrapper  upcoming-events">
                <div className="video-container" data-aos="fade-up">
                    <video
                        src={`${process.env.PUBLIC_URL}/videos/video.mp4`}
                        autoPlay
                        controls
                    />
                </div>
            </div>

            <br />
            <h1>Our Videos</h1>
            <div className="video-wrapper">
                <div className="video-container" data-aos="flip-left">
                    <video
                        src={`${process.env.PUBLIC_URL}/videos/Highlight ACARA Ke-2.mp4`}
                        controls
                    />
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
                    <a
                        href="https://wa.me/message/WHABKDM5XLPME1"
                        target="_blank"
                    >
                        Buy Video
                    </a>
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
                    <a
                        href="https://wa.me/message/WHABKDM5XLPME1"
                        target="_blank"
                    >
                        Buy Video
                    </a>
                </div>
                <div className="video-container" data-aos="flip-left">
                    <video
                        src={`${process.env.PUBLIC_URL}/videos/Highlight ACARA Ke-3.mp4`}
                        controls
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
