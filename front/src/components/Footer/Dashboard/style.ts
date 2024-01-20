import styled from "styled-components";

export const StyledDashboardFooter = styled.footer`
    height: 80px;
    background-color: #8D3297;
    margin-top: 50px;
    display: flex;
    border-top: 1px solid black;
    width: 100%;
    position: fixed;
    bottom: 0;
    .div__footerImage {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer__image {
        height: 50px;
        width: 50px;
    }
    .active {
        background-color: white;
    }
`