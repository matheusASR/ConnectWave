import styled from "styled-components";

export const StyledImagePostBox = styled.div`
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
  .imagebox__post__section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
  .image__post {
    height: auto;
    width: 100%;
  }
  .image__subtitle {
    font-size: 16px;
    text-align: center;
    padding: 0px 10px;
  }
`;
