import { useState } from "react";
import { StyledRegisterForm } from "./style";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    biografia: "",
    fotoPerfil: null, // Este exemplo assume que você está lidando com upload de arquivos
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      fotoPerfil: file,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados para o servidor ou realizar outras ações
    console.log("Dados do formulário:", formData);
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <label className="formRegister__label">
        Nome de Usuário:
        <input 
          className="formRegister__input"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>

      <label className="formRegister__label">
        Email:
        <input
          className="formRegister__input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="formRegister__label">
        Senha:
        <input
          className="formRegister__input"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </label>

      <label className="formRegister__label">
        Biografia:
        <textarea
          className="textareaRegister__input"
          name="biografia"
          value={formData.biografia}
          onChange={handleChange}
        />
      </label>

      <label className="formRegister__label">
        Foto de Perfil:
        <input className="formRegister__fileInput" type="file" accept="image/*" onChange={handleFileChange} />
      </label>

      <div className="noAccount__form">
        <p>Já possui uma conta ?</p>
        <Link className="loginBtn" to="/login">Login</Link>
      </div>

      <button className="formRegister__button" type="submit">Registrar</button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
