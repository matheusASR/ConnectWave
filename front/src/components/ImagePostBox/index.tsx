import { StyledImagePostBox } from "./style";
import Ant from "../../assets/ant.png";
import AntImage from "../../assets/ant-image.jpg"

const ImagePostBox = () => {
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
    </StyledImagePostBox>
  );
};

export default ImagePostBox;
