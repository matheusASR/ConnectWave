import DashboardFooter from "../../components/Footer/Dashboard";
import DashboardHeader from "../../components/Header/Dashboard";
import PostBox from "../../components/PostBox";
import { StyledDashboardPage } from "./style";

const Dashboard = () => {
  return (
    <StyledDashboardPage>
      <DashboardHeader />
      <main className="dashboard__mainContainer">
        <PostBox/>
      </main>
      <DashboardFooter />
    </StyledDashboardPage>
  );
};

export default Dashboard;
