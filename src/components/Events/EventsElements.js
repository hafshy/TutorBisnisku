import styled from 'styled-components';

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 100%;
    height: 675px;

    @media screen and (max-width: 480px) {
        height: 450px
    }
`

export const EventsH1 = styled.h1`
    margin: 32px 0;
    color: #EF476F;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const EventsWrapper = styled.div`
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
`

export const EventsVideo = styled.video`
    position: relative;
    width: 800px;
`


