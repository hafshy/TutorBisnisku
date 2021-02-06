import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: #FFD166;
    // background: #EDF6F9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        height: 500px;
    }

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    margin-top: 60px;
    color: #EF476F;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const HeroP = styled.p`
    margin: 24px;
    margin-bottom: 60px;
    color: #4a4a4a;
    font-size: 36px;
    text-align: center;
    max-width: 1000px;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`