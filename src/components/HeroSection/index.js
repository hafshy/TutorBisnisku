import React from 'react';
import { HeroContainer, HeroP, HeroH1, HeroContent } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="about">
            <HeroContent>
                <HeroH1>Our Value</HeroH1>
                <HeroP>Be a facilitator on business development of Indonesian Students through friendly and affordable <b>business consultancy</b> and <b>education</b>.</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
