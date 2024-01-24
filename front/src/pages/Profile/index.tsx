import { useEffect, useState } from "react";
import ProfileFooter from "../../components/Footer/Profile";
import ProfileHeader from "../../components/Header/Profile";
import { StyledProfilePage } from "./style";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
// import PostBox from "../../components/PostBox";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [user, setUser] = useState<any>({});
  const [userPosts, setUserPosts] = useState<any>({});
  const [userNotLogged, setUserNotLogged] = useState(false);

  useEffect(() => {
    const getUserInfos = async () => {
      const token = localStorage.getItem("@ConnectWave:TOKEN");
      if (!token) {
        setUserNotLogged(true);
      } else {
        try {
          const response = await api.get("/users/profile/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.statusText === "OK") {
            setUser(response.data);
            const responseUserPosts = await api.get(
              `/posts/user/${response.data.id}/`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (responseUserPosts.statusText === "OK") {
              setUserPosts(responseUserPosts.data);
            }
          } else {
            localStorage.removeItem("@ConnectWave:TOKEN");
            window.location.reload();
          }
        } catch (err: any) {
          toast.error(
            `Erro ao buscar dados do usuário logado: ${err.response.data.message}`
          );
        }
      }
    };
    getUserInfos();
  }, []);

  return (
    <StyledProfilePage>
      {userNotLogged ? (
        <>
          <div className="profile__divContainer">
            <h1>Sem Credenciais!</h1>
            <Link className="go__login" to="/login">
              Fazer Login
            </Link>
          </div>
        </>
      ) : (
        <>
          <ProfileHeader user={user} />
          <main className="profile__mainContainer">
            {/* {userPosts.map((userPost: any) => (
              <PostBox key={userPost.id} userPost={userPost} />
            ))} */}
          </main>
        </>
      )}
      <ProfileFooter />
    </StyledProfilePage>
  );
};

export default ProfilePage;
