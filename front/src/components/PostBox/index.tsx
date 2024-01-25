import { StyledImagePostBox } from "./style";
import TimeAgo from "./utils";

const PostBox = ({ userPost }: any) => {
  return (
    <StyledImagePostBox>
      <section className="userInfo__post__section">
        <img className="perfil__image" src={userPost.user.profile_picture} alt="perfil-image" />
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
    </StyledImagePostBox>
  );
};

export default PostBox;
