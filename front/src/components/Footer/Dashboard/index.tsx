import { StyledDashboardFooter } from "./style";
import HomeButton from "../../../assets/home__bttn.png"
import ProfileButton from "../../../assets/profile__bttn.png"
import { Link } from "react-router-dom";

const DashboardFooter = () => {
  return (
    <StyledDashboardFooter>
      <Link to="/" className="div__footerImage active">
        <img className="footer__image" src={HomeButton} alt="home-button" />
      </Link>
      <Link to="/profile" className="div__footerImage">
        <img className="footer__image" src={ProfileButton} alt="profile-button" />
      </Link>
    </StyledDashboardFooter>
  );
};

export default DashboardFooter;
