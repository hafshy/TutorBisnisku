import React from 'react';
import { WhoContainer, VideoContainer, VideoBg, TextContainer, TextH1, TextP } from './WhoElements';
import Video from '../../videos/video.mp4';

const Who = () => {
    return (
        <WhoContainer>
            <VideoContainer>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </VideoContainer>
            <TextContainer>
                <TextH1>Who Are We?</TextH1>
                <TextP>We are a consultant who places great importance on providing the best service through a <b><i>friendly</i></b> and <b><i>attractive</i></b> delivery to <b><i>university students</i></b>.</TextP>
            </TextContainer>
        </WhoContainer>
    )
}

export default Who
