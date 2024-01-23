import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    margin-top: 50px;
    width: 95%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .formRegister__input {
        background-color: #DFD8D8;
        width: 100%;
        border-radius: 20px;
        height: 40px;
        margin-top: 10px;
        font-size: 16px;
        padding: 20px;
    }
    .textareaRegister__input {
        background-color: #DFD8D8;
        width: 100%;
        border-radius: 20px;
        height: 80px;
        margin-top: 10px;
        padding: 20px;
        font-size: 16px;
    }
    .formRegister__button {
        background-color: #DFD8D8;
        width: 100%;
        border-radius: 20px;
        height: 60px;
        font-weight: bold;
        font-size: 20px;
    }
    .formRegister__label {
        font-size: 20px;
        font-weight: bold;
    }
    .formRegister__fileInput {
        width: 100%;
        margin-top: 10px;
    }
    .noAccount__form {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .loginBtn {
        font-weight: bold;
        text-decoration: underline;
    }
    @media (min-width: 700px) {
        max-width: 700px;
    }
`