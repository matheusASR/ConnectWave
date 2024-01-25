import styled from "styled-components";

export const StyledEditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px;
  .formEdit__input {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 40px;
    margin-top: 10px;
    font-size: 16px;
    padding: 20px;
  }
  .textareaEdit__input {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 80px;
    margin-top: 10px;
    padding: 20px;
    font-size: 16px;
  }
  .formEdit__button {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 60px;
    font-weight: bold;
    font-size: 20px;
  }
  .formEdit__label {
    font-size: 20px;
    font-weight: bold;
  }
  .formEdit__fileInput {
    width: 100%;
    margin-top: 10px;
  }
`;
