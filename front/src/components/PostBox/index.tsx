import { StyledImagePostBox } from "./style";
import Ant from "../../assets/ant.png";
import AntImage from "../../assets/ant-image.jpg"

const PostBox = ({userPost}: any) => {
  return (
    <StyledImagePostBox>
      <section className="userInfo__post__section">
        <img className="perfil__image" src={Ant} alt="perfil-image" />
        <div className="userInfo__post__div">
          <p className="username__post">Anthony Edwards</p>
          <p className="createdPost__time">Há 3 min</p>
        </div>
      </section>
      <section className="imagebox__post__section">
        <img className="image__post" src={AntImage} alt="image-post" />
        <p className="image__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="textbox__post__section">
        <p className="text__post">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </StyledImagePostBox>
  );
};

export default PostBox;
