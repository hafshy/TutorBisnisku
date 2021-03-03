import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Video from "../../videos/video.mp4";
import {
    EventsContainer,
    EventsH1,
    EventsWrapper,
    EventsCard,
    EventsPicture,
    EventsContent,
    EventsH2,
    EventsDate,
    EventsLocation,
    EventsDescription,
    EventsVideo,
} from "./EventsElements";
import Slider from "infinite-react-carousel";

const EventsSection = () => {
    let carousel = useRef(null);

    const hideRightArrow = () => {
        let rightArr = document.querySelector(".rec-arrow-right");
        rightArr.classList.add("hide");
    };

    const hideLeftArrow = () => {
        let leftArr = document.querySelector(".rec-arrow-left");
        leftArr.classList.add("hide");
    };

    const showRightArrow = () => {
        let rightArr = document.querySelector(".rec-arrow-right");
        rightArr.classList.remove("hide");
    };

    const showLeftArrow = () => {
        let leftArr = document.querySelector(".rec-arrow-left");
        leftArr.classList.remove("hide");
    };

    const autoPlaySpeed = 5000;

    return (
        <EventsContainer className="event-container">
            <EventsH1 className="event-title">Our Events</EventsH1>
            <div>
                {/* <Carousel
                    ref={(el) => {
                        carousel = el;
                    }}
                    transitionMs={800}
                    enableAutoPlay
                    autoPlaySpeed={autoPlaySpeed}
                    enableSwipe
                    enableMouseSwipe
                    onNextEnd={(nextItemObject, currentPageIndex) => {
                        if (currentPageIndex == 2) {
                            hideRightArrow();

                            if (carousel) {
                                setTimeout(() => {
                                    carousel.goTo(0);
                                    showRightArrow();
                                    hideLeftArrow();
                                }, autoPlaySpeed);
                            }
                            
                            showLeftArrow();
                        }
                    }}
                >
                    {[1, 2, 3].map((item, index) => {
                        return (
                            <div key={index} className="video-container">
                                <EventsVideo
                                    autoPlay
                                    loop
                                    muted
                                    src={Video}
                                    type="video/mp4"
                                />
                            </div>
                        );
                    })}
                </Carousel> */}
                <EventsVideo
                    className="dummy"
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                />
            </div>
        </EventsContainer>
    );
};

export default EventsSection;
