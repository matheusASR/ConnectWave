import { useState } from "react";
import { StyledEditProfileForm } from "./style";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

const EditProfileForm = ({userId}: any) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    profile_picture: null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    const updatedValue = type === "file" ? files[0] : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );
    const token = localStorage.getItem("@ConnectWave:TOKEN");
    try {
      const response = await api.patch(`/users/${userId}/`, filteredFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      if (response.statusText === "OK") {
        toast.success("Usuário atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error: any) {
      toast.error(`Erro ao atualizar usuário: ${error.response.data.message}`);
    }
  };

  return (
    <StyledEditProfileForm onSubmit={handleSubmit}>
      <label className="formEdit__label">
        Nome de Usuário:
        <input
          className="formEdit__input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <label className="formEdit__label">
        Email:
        <input
          className="formEdit__input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="formEdit__label">
        Senha:
        <input
          className="formEdit__input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <label className="formEdit__label">
        Biografia:
        <textarea
          className="textareaEdit__input"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </label>

      <label className="formEdit__label">
        Foto de Perfil:
        <input
          className="formEdit__fileInput"
          type="file"
          accept="image/*"
          name="profile_picture"
          onChange={handleChange}
        />
      </label>

      <button className="formEdit__button" type="submit">
        Salvar
      </button>
    </StyledEditProfileForm>
  );
};

export default EditProfileForm;
