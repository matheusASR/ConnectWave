import RegisterForm from "../../components/Form/Register";
import RegisterHeader from "../../components/Header/Form";
import { StyledRegisterPage } from "./style";

const RegisterPage = () => {

  return (
    <StyledRegisterPage>
      <RegisterHeader/>
      <main className="registerPage__main">
        <RegisterForm/>
      </main>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
