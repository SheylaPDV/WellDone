import useForm from "../../../hooks/useForm";
import "./newArticule.css";
import { useTranslation } from "react-i18next";

function NewArticuleForm({ onSubmit }) {
  const {
    formValue: newArticule,
    handleChange,
    handleSubmit,
  } = useForm({
    title: "",
    content: "",
    photo: "",
  });
  const { title, content, photo } = newArticule;

  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="articuleForm"
      encType="multipart/form-data"
    >
      <h2 className="articuleForm-title">{t("articuleForm.title")}</h2>
      <label className="label-input">{t("newArticule.title")}</label>
      <div className="input-group">
        <input
          className="input"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <label className="label-input">{t("newArticule.content")}</label>
      <div className="input-group">
        <textarea
          maxlength="999"
          className="text-area"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <div>
        <label htmlFor="photo" className="photo-label">
          <i className="fa fa-2x fa-camera icon"></i>
          {t("newArticule.photo")}
          <input
            className="photo-input"
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {photo && (
            <span className="photo-text">{t("newArticule.loaded")}</span>
          )}
        </label>
      </div>

      <button className="button">{t("newArticule.create")}</button>
    </form>
  );
}

export default NewArticuleForm;
