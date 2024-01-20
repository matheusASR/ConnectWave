import styled from "styled-components";

export const StyledProfileHeader = styled.header`
    width: 100%;
    padding-top: 20px;
    background-color: #8D3297;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .user__bio {
        color: black;
        font-size: 20px;
        text-align: center;
        padding: 10px;
    }
    .profile__userImage {
        height: 100px;
        width: auto;
        border: 1px solid black;
        border-radius: 50px;
    }
    .editProfile__button {
        width: 100%;
        background-color: black;
        height: 50px;
        color: white;
        font-size: 20px;
    }
`