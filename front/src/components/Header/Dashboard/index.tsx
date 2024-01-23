import { StyledDashboardHeader } from "./style";
import ThreeLineMenuIcon from "../../../assets/three-line-menu-icon.png"
import { Link } from "react-router-dom";

const DashboardHeader = () => {
    return (
        <StyledDashboardHeader>
            <h1 className="dashboardHeader__title">ConnectWave</h1>
            <img className="menu-icon" src={ThreeLineMenuIcon} alt="three-line-menu-icon" />
            <div className="divBttns__dashboard">
                <Link to="/login" className="loginBttn">Login</Link>
                <Link to="/register" className="registerBttn">Cadastrar-se</Link>
            </div>
        </StyledDashboardHeader>
    )
};

export default DashboardHeader;