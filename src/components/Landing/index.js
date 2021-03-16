import React from 'react'
import { Column2, ImgWrap, LandingContainer, LandingWrapper, LandingRow, Column1, TextWrapper, Subtitle, Img } from './LandingElements'

const Landing = () => {
    return (
        <>
            <LandingContainer id="about">
                <LandingWrapper>
                    <LandingRow>
                        <Column1>
                            <TextWrapper>
                                <Subtitle>
                                We’re the company engaged in <b>business consulting</b> and <b>education</b>
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={`${process.env.PUBLIC_URL}/images/svg-1.svg`}/>
                            </ImgWrap>
                        </Column2>
                    </LandingRow>
                </LandingWrapper>
            </LandingContainer>
        </>
    )
}

export default Landing
