import { useState } from "react";
import CommentsModal from "../Modals/Comments";
import { StyledPostBox } from "./style";
import TimeAgo from "./utils";
import { StyledCommentsModal } from "../Modals/Comments/style";

const PostBox = ({ userPost }: any) => {
  const [commentsModal, setCommentsModal] = useState(false);

  const openCommentsModal = () => {
    setCommentsModal(true);
  };

  const closeCommentsModal = () => {
    setCommentsModal(false);
  };

  return (
    <StyledPostBox>
      <section className="userInfo__post__section">
        <img
          className="perfil__image"
          src={userPost.user.profile_picture}
          alt="perfil-image"
        />
        <div className="userInfo__post__div">
          <p className="username__post">{userPost.user.username}</p>
          <p className="createdPost__time">
            {<TimeAgo createdAt={userPost.created_at} />}
          </p>
        </div>
      </section>
      {userPost.content.length > 0 ? (
        <section className="textbox__post__section">
          <p className="text__post">{userPost.content}</p>
        </section>
      ) : (
        <section className="imagebox__post__section">
          <img className="image__post" src={userPost.image} alt="image-post" />
          <p className="image__subtitle">{userPost.caption}</p>
        </section>
      )}
      <section className="comments__btn__section">
        <button onClick={openCommentsModal} className="comments__btn">
          Comentários
        </button>
      </section>
      <CommentsModal
        isOpen={commentsModal}
        onRequestClose={closeCommentsModal}
        height="650px"
      >
        <StyledCommentsModal>
          <div className="modal__header">
            <h2>Comentários</h2>
            <button className="modal__close" onClick={closeCommentsModal}>
              X
            </button>
          </div>
          <div className="comments__list">
          
          </div>
          <div className="create__comment__div">
            <form className="comment__form">
              <input className="comment__textarea" type="textarea" />
              <button className="comment__btn">Comentar</button>
            </form>
          </div>
        </StyledCommentsModal>
      </CommentsModal>
    </StyledPostBox>
  );
};

export default PostBox;
