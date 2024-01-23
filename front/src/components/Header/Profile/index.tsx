import { StyledProfileHeader } from "./style";
import Ant from "../../../assets/ant.png";
import NewPostBttn from "../../../assets/new__post__bttn.png"

const ProfileHeader = () => {
  return (
    <StyledProfileHeader>
      <img className="profile__userImage" src={Ant} alt="profile-image" />
      <h1 className="profile__userName">Anthony Edwards</h1>
      <p className="user__bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="editProfile__button">
        Editar
      </button>
      <button className="postProfile__button">
       <img className="newPost__bttn" src={NewPostBttn} alt="new-post-button" />
      </button>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
