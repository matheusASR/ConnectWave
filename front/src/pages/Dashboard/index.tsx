import DashboardFooter from "../../components/Footer/Dashboard";
import DashboardHeader from "../../components/Header/Dashboard";
import FormHeader from "../../components/Header/Form";
import PostBox from "../../components/PostBox";
import { StyledDashboardPage } from "./style";

const Dashboard = () => {
  const token = localStorage.getItem("@ConnectWave:TOKEN")

  return (
    <StyledDashboardPage>
      {token ? <FormHeader/> : <DashboardHeader />}
      <main className="dashboard__mainContainer">
        <PostBox/>
      </main>
      <DashboardFooter />
    </StyledDashboardPage>
  );
};

export default Dashboard;
