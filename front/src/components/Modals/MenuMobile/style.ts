import styled from "styled-components";

export const StyledMenuMobileModal = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .menuMobile__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    text-align: center;
    .menuMobile__btn {
      height: 60px;
      font-size: 20px;
      border-radius: 10px;
      font-weight: bold;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      font-weight: bold;
      font-size: 20px;
    }
    .register__btn {
      background-color: #8d3297;
    }
  }
  .menuMobile__close {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    border-radius: 5px;
  }
`;
