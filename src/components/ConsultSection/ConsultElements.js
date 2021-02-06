import styled from 'styled-components';

export const ConsultContainer = styled.div`
    background: #118AB2;
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
        height: 70vh;
    }
`

export const ConsultContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ConsultH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    padding: 0 60px;
    max-width: 700px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ConsultBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
