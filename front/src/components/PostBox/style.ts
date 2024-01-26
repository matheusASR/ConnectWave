import styled from "styled-components";

export const StyledPostBox = styled.div`
  width: 100%;
  margin: 50px 0px 100px 0px;
  .userInfo__post__section {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #8d3297;
    border-top: 2px solid black;
  }
  .perfil__image {
    height: 70px;
    width: auto;
    border-radius: 5px;
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
    font-size: 20px;
    text-align: center;
    padding: 0px 10px;
  }
  .textbox__post__section {
    width: 100%;
    padding: 10px;
  }
  .text__post {
    font-size: 18px;
    text-align: center;
  }
  .comments__btn__section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .comments__btn {
    width: 250px;
    height: 50px;
    font-size: 23px;
    font-weight: bold;
    color: #8d3297;
    border-radius: 25px;
  }
  @media (min-width: 700px) {
    max-width: 700px;
  }
`;
