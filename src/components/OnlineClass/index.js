import React from "react";
import { useHistory } from "react-router-dom";

const OnlineClass = () => {
    const history = useHistory();

    return (
        <div className="online-class-page">
            <div className="online-class-wrapper">
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/workshop.png`}
                    />
                </div>
                <div className="text-container">
                    <h1>Online Class</h1>
                    <p>
                        Online live class plus practical sessions from business
                        experts to increase your knowledge about business.
                        Through webinars, participants can gain new knowledge
                        and are free to ask questions during the session.
                        Together with My Business Tutor, we will deliver the
                        latest news about the world of business through our
                        Online Class.
                    </p>
                </div>
            </div>

            <div className="btn-container">
                <button
                    className="get-started-btn"
                    onClick={() => history.push("/video")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default OnlineClass;
