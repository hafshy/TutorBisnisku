import styled from 'styled-components';

export const ActivityContainer = styled.div`
    min-height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EDF6F9;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`

export const ActivityWrapper = styled.div`
    max-width: 850px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ActivityCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    min-height: 390px;
    padding: 30px;
    margin: 0 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ActivityIcon = styled.img`
    height: 160px;
    width: 200px;
    margin-bottom: 10px;
`

export const ActivityH1 = styled.h1`
    margin-bottom: 64px;
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

export const ActivityH2 = styled.h2`
    font-size: 1.25rem;
    margin: 20px auto;
    color: #4a4a4a;
`

export const ActivityP = styled.p`
    font-size: 1.15rem;
    text-align: center;
    color: #4a4a4a;
`