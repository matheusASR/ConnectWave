import { useState } from "react";
import { StyledNewPostForm } from "./style";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

const NewPostForm = () => {
  const [postData, setPostData] = useState({
    content: "",
    image: null,
    caption: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;

    // Handle different input types
    const inputValue = type === "file" ? files[0] : value;

    setPostData({
      ...postData,
      [name]: inputValue,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const filteredPostData = Object.fromEntries(
      Object.entries(postData).filter(([_, value]) => value !== "" && value !== null)
    );   
    const token = localStorage.getItem("@ConnectWave:TOKEN");
    try {
      const response = await api.post(`/posts/create/`, filteredPostData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.statusText === "Created") {
        toast.success("Publicação criada com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error: any) {
      console.log(error)
      toast.error(`Erro ao criar publicação: ${error.response.data.detail}`);
    }
  };

  return (
    <StyledNewPostForm onSubmit={handleSubmit} encType="multipart/form-data">
      <label className="formPost__label">
        Post de Texto:
        <textarea
          className="textareaPost__input"
          name="content"
          value={postData.content}
          onChange={handleChange}
        />
      </label>

      <p className="otherPost__form">Ou</p>

      <label className="formPost__label">
        Post de Imagem:
        <input
          className="formPost__fileInput"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
        />
      </label>

      <label className="formPost__label">
        Legenda:
        <textarea
          className="textareaSubtitle__input"
          name="caption"
          value={postData.caption}
          onChange={handleChange}
        />
      </label>

      <button className="formPost__button" type="submit">
        Postar
      </button>
    </StyledNewPostForm>
  );
};

export default NewPostForm;

