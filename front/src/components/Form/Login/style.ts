import styled from "styled-components";

export const StyledLoginForm = styled.form`
    margin-top: 50px;
    width: 95%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .formLogin__input {
        background-color: #DFD8D8;
        width: 100%;
        border-radius: 20px;
        height: 40px;
        margin-top: 10px;
        font-size: 16px;
        padding: 20px;
    }
    .formLogin__button {
        background-color: #DFD8D8;
        width: 100%;
        border-radius: 20px;
        height: 60px;
        font-weight: bold;
        font-size: 20px;
    }
    .formLogin__label {
        font-size: 20px;
        font-weight: bold;
    }
    .noAccount__form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .registerBtn {
        font-weight: bold;
        text-decoration: underline;
    }
    @media (min-width: 700px) {
        max-width: 700px;
    }
`