import DashboardHeader from "../../components/Header/Dashboard";
import ImagePostBox from "../../components/ImagePostBox";
import TextPostBox from "../../components/TextPostBox";
import { StyledDashboardPage } from "./style";

const Dashboard = () => {
    return (
        <StyledDashboardPage>
            <DashboardHeader/>
            <TextPostBox/>
            <ImagePostBox/>
        </StyledDashboardPage>
    )
}

export default Dashboard;