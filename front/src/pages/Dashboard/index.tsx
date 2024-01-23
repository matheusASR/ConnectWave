import DashboardFooter from "../../components/Footer/Dashboard";
import DashboardHeader from "../../components/Header/Dashboard";
import ImagePostBox from "../../components/ImagePostBox";
import TextPostBox from "../../components/TextPostBox";
import { StyledDashboardPage } from "./style";

const Dashboard = () => {
    return (
        <StyledDashboardPage>
            <DashboardHeader/>
            <main className="dashboard__mainContainer">
                <TextPostBox/>
                <ImagePostBox/>
            </main>
            <DashboardFooter/>
        </StyledDashboardPage>
    )
}

export default Dashboard;