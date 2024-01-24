import styled from "styled-components";

export const StyledLogoutModal = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  .logoutModal__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    .logoutModal__btn {
        height: 60px;
        font-size: 20px;
        border-radius: 10px;
        font-weight: bold;
    }
    .logout__btn {
        background-color: #8D3297;
    }
  }
`