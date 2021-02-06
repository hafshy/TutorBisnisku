import styled from 'styled-components';

export const FAQContainer = styled.div`
    display: grid;
    background: #0c0c0c;
    justify-content: center;
    align-items: center;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    height: 120px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LeftContainer = styled.div`
    display: flex;
    height: 100%;
    background: #FFD166;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

export const MiddleContainer = styled.div`
    display: flex;
    height: 100%;
    background: #06D6A0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

export const RightContainer = styled.div`
    display: flex;
    height: 100%;
    background: #EDF6F9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

export const FAQH1 = styled.h1`
    margin: 32px;
    text-align: center;
    font-size: 30px;
    color: #EF476F;
    margin-top: 100px;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`

export const FAQP = styled.p`
    margin: 32px;
    color: #4a4a4a;
    text-align: center;
    font-size: 36px;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`