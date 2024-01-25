import styled from "styled-components";

export const StyledProfilePage = styled.div`
    width: 100%;
    height: 100%;
    .profile__mainContainer {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .profile__divContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        .go__login {
            font-weight: bold;
            font-size: 22px;
            text-decoration: underline;
        }
    }
    .noContent__profile {
        display: flex;
        flex-direction: column;
        height: 50vh;
        width: 80%;
        text-align: center;
        justify-content: center;
        align-items: center;
        .noContent__h1 {
            font-size: 22px;
        }
        .noContent__p {
            font-size: 19px;
        }
    }
    .userPosts__list {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`