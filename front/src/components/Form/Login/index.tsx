import { useState } from "react";
import { StyledLoginForm } from "./style";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login bem-sucedido! Redirecionando...");
  };

  return (
    <StyledLoginForm>
      <label className="formLogin__label">
        Email:
        <input
          className="formLogin__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="formLogin__label">
        Senha:
        <input
          className="formLogin__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="formLogin__button" type="button" onClick={handleLogin}>
        Entrar
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;
