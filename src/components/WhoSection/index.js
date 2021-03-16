import React from 'react';
import { WhoContainer, VideoContainer, VideoBg, TextContainer, TextH1, TextP } from './WhoElements';

const Who = () => {
    return (
        <WhoContainer>
            <VideoContainer>
                <VideoBg autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type='video/mp4' />
            </VideoContainer>
            <TextContainer>
                <TextH1>Who Are We?</TextH1>
                <TextP>We are a consultant who places great importance on providing the best service through a <b><i>friendly</i></b> and <b><i>attractive</i></b> delivery to <b><i>university students</i></b>.</TextP>
            </TextContainer>
        </WhoContainer>
    )
}

export default Who
