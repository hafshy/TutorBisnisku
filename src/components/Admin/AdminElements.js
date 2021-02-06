import styled from 'styled-components';

export const AdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EDF6F9;
    width: 100%;
`

export const AdminH1 = styled.h1`
    margin: 64px 0;
    color: #EF476F;
    font-size: 30px;
    text-align: center;
`

export const AdminWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
`

export const AdminForm = styled.form`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 64px;
    min-width: 640px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 820px) {
        min-width: 500px;
    }

    @media screen and (max-width: 640px) {
        flex-direction: column;
        min-width: 300px;
    }
`

export const AdminH2 = styled.h2`
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

export const FormLabel = styled.label`
    font-size: 1.3rem;
    text-align: left;
    color: #4a4a4a;
    max-width: 640px;
    margin-bottom: 4px;

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

export const FormInput = styled.input`
    display: block;
    width: 100%;
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`


export const FormInputDesc = styled.textarea`
    display: block;
    width: 100%;
    background-color: #eee;
    height: 150px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
    resize: none;
`

export const DataTable = styled.table`
    background: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 64px 0;
    min-width: 640px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 820px) {
        min-width: 500px;
    }

    @media screen and (max-width: 640px) {
        flex-direction: column;
        min-width: 300px;
    }
`

export const DataTh = styled.th`
    padding: 5px 12px;
    background: #eee;
    text-transform: uppercase;
`

export const DataTd = styled.td`
    padding: 5px 12px;
    background: #fff;
`
export const DataTr = styled.tr`
    padding: 5px 12px;
    background: #ade;
`