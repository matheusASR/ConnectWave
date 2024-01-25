import { StyledNewPostForm } from "./style";

const NewPostForm = () => {
  return (
    <StyledNewPostForm>
      <label className="formPost__label">
        Post de Texto:
        <textarea className="textareaPost__input" name="biografia" />
      </label>

      <p className="otherPost__form">Ou</p>

      <label className="formPost__label">
        Post de Imagem:
        <input className="formPost__fileInput" type="file" accept="image/*" />
      </label>

      <label className="formPost__label">
        Legenda:
        <textarea className="textareaSubtitle__input" name="biografia" />
      </label>

      <button className="formPost__button" type="submit">
        Postar
      </button>
    </StyledNewPostForm>
  );
};

export default NewPostForm;
