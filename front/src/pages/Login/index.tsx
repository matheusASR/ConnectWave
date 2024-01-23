import LoginForm from "../../components/Form/Login";
import FormHeader from "../../components/Header/Form";
import { StyledLoginPage } from "./style";

const LoginPage = () => {

  return (
    <StyledLoginPage>
      <FormHeader/>
      <main className="loginPage__main">
        <LoginForm/>
      </main>
    </StyledLoginPage>
  );
};

export default LoginPage;
