import styled from 'styled-components';

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EDF6F9;
    width: 100%;
`

export const EventsH1 = styled.h1`
    margin: 64px 0;
    color: #EF476F;
    font-size: 30px;
    text-align: center;
`

export const EventsWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
`

export const EventsCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 64px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`

export const EventsPicture = styled.img`
    height: 320px;
    width: 320px;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    min-width: 240px;

    @media screen and (max-width: 820px) {
        height: 280px;
        width: 210px;
        min-width: 210px;
    }

    @media screen and (max-width: 400px) {
        height: 160px;
        width: 120px;
        min-width: 90px;
    }
`

export const EventsContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;

    @media screen and (max-width: 640px) {
        align-items: center;
    }

    @media screen and (max-width: 400px) {
        padding: 10px;
    }
`

export const EventsH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 24px;
    color: #4a4a4a;

    @media screen and (max-width: 820px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 640px) {
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`

export const EventsDescription = styled.p`
    font-size: 1.3rem;
    text-align: left;
    color: #4a4a4a;
    max-width: 640px;

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 640px) {
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.8rem;
    }
`

export const EventsDate = styled.p`
    font-size: 1.3rem;
    text-align: left;
    color: #4a4a4a;
    max-width: 640px;

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 640px) {
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.8rem;
    }
`

export const EventsLocation = styled.p`
    font-size: 1.3rem;
    text-align: left;
    color: #4a4a4a;
    max-width: 640px;

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 640px) {
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.8rem;
    }
`