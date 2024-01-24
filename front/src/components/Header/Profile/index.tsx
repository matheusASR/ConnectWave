import { StyledProfileHeader } from "./style";
import Ant from "../../../assets/ant.png";
import NewPostBttn from "../../../assets/new__post__bttn.png";
import { useState } from "react";
import EditProfileModal from "../../Modals/EditProfile";
import NewPostModal from "../../Modals/NewPost";
import { StyledNewPostModal } from "../../Modals/NewPost/style";
import { StyledEditProfileModal } from "../../Modals/EditProfile/style";
import LogoutBttn from "../../../assets/logout__bttn.png"
import LogoutModal from "../../Modals/Logout";
import { StyledLogoutModal } from "../../Modals/Logout/style";

const ProfileHeader = () => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [newPostModal, setNewPostModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

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
      <button onClick={openLogoutModal}><img className="logout__bttn" src={LogoutBttn} alt="logout-bttn" /></button>
      <img className="profile__userImage" src={Ant} alt="profile-image" />
      <h1 className="profile__userName">Anthony Edwards</h1>
      <p className="user__bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
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
      >
        <StyledEditProfileModal>
          <div className="modal__header">
            <h2>Editar Perfil</h2>
            <button className="modal__close" onClick={closeEditProfileModal}>
              X
            </button>
          </div>
          <form className="editProfile__form">
            <label className="formEdit__label">
              Nome de Usuário:
              <input className="formEdit__input" type="text" name="nome" />
            </label>

            <label className="formEdit__label">
              Email:
              <input className="formEdit__input" type="email" name="email" />
            </label>

            <label className="formEdit__label">
              Senha:
              <input className="formEdit__input" type="password" name="senha" />
            </label>

            <label className="formEdit__label">
              Biografia:
              <textarea className="textareaEdit__input" name="biografia" />
            </label>

            <label className="formEdit__label">
              Foto de Perfil:
              <input
                className="formEdit__fileInput"
                type="file"
                accept="image/*"
              />
            </label>

            <button className="formEdit__button" type="submit">
              Salvar
            </button>
          </form>
        </StyledEditProfileModal>
      </EditProfileModal>
      <NewPostModal isOpen={newPostModal} onRequestClose={closeNewPostModal}>
        <StyledNewPostModal>
          <div className="modal__header">
            <h2>Criar Post</h2>
            <button className="modal__close" onClick={closeNewPostModal}>
              X
            </button>
          </div>
          <form className="newPost__form">
            <label className="formPost__label">
              Post de Texto:
              <textarea className="textareaPost__input" name="biografia" />
            </label>

            <p className="otherPost__form">Ou</p>

            <label className="formPost__label">
              Post de Imagem:
              <input
                className="formPost__fileInput"
                type="file"
                accept="image/*"
              />
            </label>

            <label className="formPost__label">
              Legenda:
              <textarea className="textareaSubtitle__input" name="biografia" />
            </label>

            <button className="formPost__button" type="submit">
              Postar
            </button>
          </form>
        </StyledNewPostModal>
      </NewPostModal>
      <LogoutModal isOpen={logoutModal} onRequestClose={closeLogoutModal} height="300px">
        <StyledLogoutModal>
          <h2>Deseja mesmo fazer Logout?</h2>
          <div className="logoutModal__buttons">
            <button className="logoutModal__btn logout__btn">Sim</button>
            <button onClick={closeLogoutModal} className="logoutModal__btn">Voltar</button>
          </div>
        </StyledLogoutModal>
      </LogoutModal>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
