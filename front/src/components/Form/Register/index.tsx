import { useState } from "react";
import { StyledRegisterForm } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    profile_picture: null, // Este exemplo assume que você está lidando com upload de arquivos
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
      profile_picture: file,
    });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const response = await api.post("/users/", formData);
      if (response && response.data && response.statusText === "Created") {
        toast.success("Usuário cadastrado com sucesso!")
        setTimeout(() => {
          navigate("/login")
        }, 2000);
      } else {
        toast.error(
          "Erro ao cadastrar o usuário. Verifique os dados e tente novamente."
        );
      }
    } catch (error: any) {
      toast.error(
        `Ocorreu um erro ao cadastrar o usuário: ${error.response.data.message}`
      );
    }
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <label className="formRegister__label">
        Nome de Usuário:
        <input 
          className="formRegister__input"
          type="text"
          name="username"
          value={formData.username}
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
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <label className="formRegister__label">
        Biografia:
        <textarea
          className="textareaRegister__input"
          name="bio"
          value={formData.bio}
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
