import { useEffect, useState } from "react";
import DashboardFooter from "../../components/Footer/Dashboard";
import DashboardHeader from "../../components/Header/Dashboard";
import FormHeader from "../../components/Header/Form";
import PostBox from "../../components/PostBox";
import { StyledDashboardPage } from "./style";
import { api } from "../../services/api";

const Dashboard = () => {
  const [allPosts, setAllPosts] = useState<any>([]);
  const token = localStorage.getItem("@ConnectWave:TOKEN");

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const postsResponse = await api.get("/posts/all/");
        setAllPosts(postsResponse.data);
      } catch (error: any) {
        console.error(
          "Erro ao buscar posts: ",
          error.response.data.message
        );
      }
    };
    getAllPosts();
  }, []);

  return (
    <StyledDashboardPage>
      {token ? <FormHeader /> : <DashboardHeader />}
      <main className="dashboard__mainContainer">
        {allPosts.length > 0 ? (
          <>
            {allPosts.map((post: any) => (
              <PostBox key={post.id} userPost={post} />
            ))}
          </>
        ) : (
          <div className="noContent__dashboard">
            <h1 className="noContent__h1">Ainda não há nenhum Post.</h1>
            <p className="noContent__p">Comece a criar!</p>
          </div>
        )}
      </main>
      <DashboardFooter />
    </StyledDashboardPage>
  );
};

export default Dashboard;
