import React from "react";
import { useHistory } from "react-router-dom";

const Consult = () => {
    const history = useHistory();

    return (
        <div className="online-class-page">
            <div className="online-class-wrapper">
                <div className="image-container">
                    <img src={`${process.env.PUBLIC_URL}/images/consult.png`} />
                </div>
                <div className="text-container">
                    <h1>Consult</h1>
                    <p>
                        Do you have a business idea but do not have experience
                        and knowledge about business? Immediately register
                        yourself in our Consulting program! We can help you to
                        realize your business idea. Because according to our
                        slogan, Tutor Bisnisku? #BisnisGapakeRagu
                    </p>
                </div>
            </div>

            <div className="btn-container">
                <button
                    className="get-started-btn"
                    onClick={() => history.push("/partners")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Consult;
