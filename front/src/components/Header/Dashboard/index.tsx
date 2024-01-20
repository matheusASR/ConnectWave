import { StyledDashboardHeader } from "./style";
import ThreeLineMenuIcon from "../../../assets/three-line-menu-icon.png"

const DashboardHeader = () => {
    return (
        <StyledDashboardHeader>
            <h1 className="dashboardHeader__title">ConnectWave</h1>
            <img className="menu-icon" src={ThreeLineMenuIcon} alt="three-line-menu-icon" />
        </StyledDashboardHeader>
    )
};

export default DashboardHeader;