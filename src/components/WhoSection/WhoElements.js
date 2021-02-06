import styled from 'styled-components';

export const WhoContainer = styled.div`
    display: flex;
    background: #0c0c0c;
    justify-content: center;
    align-items: center;
    height: 90vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(100deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
        z-index: 2;
    }
`

export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    overflow: hidden;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const TextContainer = styled.div`
    z-index: 3;
    position: absolute;
    top: 0;
    left: 60%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #06D6A0;
    padding: 48px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        left: 0;
        background: rgba(6, 214, 160, 0.5);
    }
`

export const TextH1 = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 30px;
    color: #EF476F;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const TextP = styled.p`
    margin-top: 24px;
    color: #4a4a4a;
    text-align: center;
    font-size: 36px;

    @media screen and (max-width: 768px) {
        font-size: 36px;
        color: #fff;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
        color: #fff;
    }
`