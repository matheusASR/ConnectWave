import { useState } from "react";
import { StyledLoginForm } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault()
      const response = await api.post('/users/login/', {
        username: username,
        password: password
      })
      if (response && response.data && response.statusText === "OK") {
        toast.success('Usuário logado com sucesso');
        localStorage.setItem('@ConnectWave:TOKEN', response.data.access)
        setTimeout(() => {
          navigate('/profile')
        }, 2000)
      } 
    } catch (error: any) {
      toast.error(`Erro ao logar o usuário: ${error.response.data.message}`);
    }
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
