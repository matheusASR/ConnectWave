import styled from "styled-components";

export const StyledTextPostBox = styled.div`
  width: 100%;
  margin-top: 50px;
  .userInfo__post__section {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #8d3297;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .perfil__image {
    width: 70px;
    height: 70px;
    border: 1px solid black;
    border-radius: 50px;
  }
  .userInfo__post__div {
    display: flex;
    flex-direction: column;
    .username__post {
      font-size: 20px;
      font-weight: bold;
    }
    .createdPost__time {

    }
  }
  .textbox__post__section {
    width: 100%;
    padding: 10px;
  }
  .text__post {
    font-size: 16px;
    text-align: center;
  }
`;
