import { useState } from "react";
import { StyledLoginForm } from "./style";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login bem-sucedido! Redirecionando...");
  };

  return (
    <StyledLoginForm>
      <label className="formLogin__label">
        Nome de Usuário:
        <input
          className="formLogin__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="noAccount__form">
        <p>Ainda não tem uma conta ?</p>
        <Link className="registerBtn" to="/register">Cadastrar-se</Link>
      </div>
      <button className="formLogin__button" type="button" onClick={handleLogin}>
        Entrar
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;
