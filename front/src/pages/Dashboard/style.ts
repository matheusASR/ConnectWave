import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    width: 100%;
    height: 100%;
    .dashboard__mainContainer {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .noContent__dashboard {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 60vh;
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
    }
`