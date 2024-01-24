import styled from "styled-components";

export const StyledProfilePage = styled.div`
    width: 100%;
    height: 100%;
    .profile__mainContainer {
        display: flex;
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
`