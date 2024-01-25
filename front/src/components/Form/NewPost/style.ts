import styled from "styled-components";

export const StyledNewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px;
  .textareaPost__input {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 80px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
  .textareaSubtitle__input {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 60px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
  .formPost__button {
    background-color: #dfd8d8;
    width: 100%;
    border-radius: 20px;
    height: 60px;
    font-weight: bold;
    font-size: 20px;
  }
  .formPost__label {
    font-size: 20px;
    font-weight: bold;
  }
  .formPost__fileInput {
    width: 100%;
    margin-top: 10px;
  }
  .otherPost__form {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
`;
