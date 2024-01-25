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
    .divBttns__dashboard {
        display: none;
    }
    .loginBttn {
        display: none;
    }
    .registerBttn {
        display: none;
    }
    @media (min-width: 700px) {
        .menu-icon {
            display: none;
        }
        .divBttns__dashboard {
            display: flex;
            align-items: center;
            gap: 50px;
        }
        .loginBttn {
            display: block;
            color: black;
            font-size: 24px;
        }
        .registerBttn {
            display: block;
            font-size: 19px;
            border: 1px solid black;
            background-color: black;
            color: white;
            border-radius: 10px;
            padding: 10px;
        }
    }
    .purple__bg {
        background-color: #8D3297;
    }
`