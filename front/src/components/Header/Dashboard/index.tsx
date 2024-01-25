import { StyledDashboardHeader } from "./style";
import ThreeLineMenuIcon from "../../../assets/three-line-menu-icon.png";
import { Link } from "react-router-dom";
import MenuMobileModal from "../../Modals/MenuMobile";
import { StyledMenuMobileModal } from "../../Modals/MenuMobile/style";
import { useState } from "react";

const DashboardHeader = () => {
  const [menuMobileModal, setMenuMobileModal] = useState(false);

  const openMenuMobileModal = () => {
    setMenuMobileModal(true);
  };

  const closeMenuMobileModal = () => {
    setMenuMobileModal(false);
  };

  return (
    <StyledDashboardHeader>
      <h1 className="dashboardHeader__title">ConnectWave</h1>
      <button className="purple__bg" onClick={openMenuMobileModal}>
        <img
          className="menu-icon"
          src={ThreeLineMenuIcon}
          alt="three-line-menu-icon"
        />
      </button>
      <div className="divBttns__dashboard">
        <Link to="/login" className="loginBttn">
          Login
        </Link>
        <Link to="/register" className="registerBttn">
          Cadastrar-se
        </Link>
      </div>
      <MenuMobileModal
        isOpen={menuMobileModal}
        onRequestClose={closeMenuMobileModal}
        height="300px"
      >
        <StyledMenuMobileModal>
          <button className="menuMobile__close" onClick={closeMenuMobileModal}>X</button>
          <div className="menuMobile__buttons">
            <Link to="/login" className="menuMobile__btn">
              Fazer Login
            </Link>
            <Link to="/register" className="menuMobile__btn register__btn">
              Cadastrar-se
            </Link>
          </div>
        </StyledMenuMobileModal>
      </MenuMobileModal>
    </StyledDashboardHeader>
  );
};

export default DashboardHeader;
