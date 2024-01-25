import { StyledProfileHeader } from "./style";
import NewPostBttn from "../../../assets/new__post__bttn.png";
import { useState } from "react";
import EditProfileModal from "../../Modals/EditProfile";
import NewPostModal from "../../Modals/NewPost";
import { StyledNewPostModal } from "../../Modals/NewPost/style";
import { StyledEditProfileModal } from "../../Modals/EditProfile/style";
import LogoutBttn from "../../../assets/logout__bttn.png";
import LogoutModal from "../../Modals/Logout";
import { StyledLogoutModal } from "../../Modals/Logout/style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "../../Form/EditProfile";
import NewPostForm from "../../Form/NewPost";

const ProfileHeader = ({ user }: any) => {
  const navigate = useNavigate()
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [newPostModal, setNewPostModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const logout = () => {
    localStorage.removeItem("@ConnectWave:TOKEN");
    toast.success("Usuário deslogado com sucesso!")
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  const openEditProfileModal = () => {
    setEditProfileModal(true);
  };

  const closeEditProfileModal = () => {
    setEditProfileModal(false);
  };

  const openNewPostModal = () => {
    setNewPostModal(true);
  };

  const closeNewPostModal = () => {
    setNewPostModal(false);
  };

  const openLogoutModal = () => {
    setLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  return (
    <StyledProfileHeader>
      <button onClick={openLogoutModal}>
        <img className="logout__bttn" src={LogoutBttn} alt="logout-bttn" />
      </button>
      <img className="profile__userImage" src={user.profile_picture} alt="profile-image" />
      <h1 className="profile__userName">{user.username}</h1>
      <p className="user__bio">{user.bio}</p>
      <div className="profile__divBttns">
        <button onClick={openEditProfileModal} className="editProfile__button">
          Editar
        </button>
        <button onClick={openNewPostModal} className="postProfile__button">
          <img
            className="newPost__bttn"
            src={NewPostBttn}
            alt="new-post-button"
          />
        </button>
      </div>
      <EditProfileModal
        isOpen={editProfileModal}
        onRequestClose={closeEditProfileModal}
        height="700px"
      >
        <StyledEditProfileModal>
          <div className="modal__header">
            <h2>Editar Perfil</h2>
            <button className="modal__close" onClick={closeEditProfileModal}>
              X
            </button>
          </div>
          <EditProfileForm userId={user.id} />
        </StyledEditProfileModal>
      </EditProfileModal>
      <NewPostModal isOpen={newPostModal} onRequestClose={closeNewPostModal} height="600px">
        <StyledNewPostModal>
          <div className="modal__header">
            <h2>Criar Post</h2>
            <button className="modal__close" onClick={closeNewPostModal}>
              X
            </button>
          </div>
          <NewPostForm/>
        </StyledNewPostModal>
      </NewPostModal>
      <LogoutModal
        isOpen={logoutModal}
        onRequestClose={closeLogoutModal}
        height="300px"
      >
        <StyledLogoutModal>
          <h2>Deseja mesmo fazer Logout?</h2>
          <div className="logoutModal__buttons">
            <button onClick={logout} className="logoutModal__btn logout__btn">Sim</button>
            <button onClick={closeLogoutModal} className="logoutModal__btn">
              Voltar
            </button>
          </div>
        </StyledLogoutModal>
      </LogoutModal>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
