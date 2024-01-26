import styled from "styled-components";

export const StyledCommentsModal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .modal__header {
    display: flex;
    justify-content: space-between;
    .modal__close {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border-radius: 5px;
    }
  }
  .comments__list {
    height: 350px;
    width: 100%;
    padding: 15px 0px;
  }
  .create__comment__div {
    height: 200px;
    width: 100%;
    .comment__form {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .comment__textarea {
            width: 100%;
            height: 150px;
            border: 1px solid black;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            padding: 10px;
            font-size: 20px;
        }
        .comment__btn {
            width: 100%;
            height: 50px;
            background-color: #8D3297;
            font-size: 20px;
            font-weight: bold;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
  }
`;
