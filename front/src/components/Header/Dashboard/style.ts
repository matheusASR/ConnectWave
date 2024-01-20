import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
    width: 100%;
    height: 150px;
    background-color: #8D3297;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 5px solid black;
    .dashboardHeader__title {
        color: black;
        font-size: 40px;
    }
    .menu-icon {
        height: 40px;
        width: 40px;
    }
`