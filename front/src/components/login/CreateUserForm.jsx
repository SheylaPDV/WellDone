import { useTranslation } from "react-i18next";
import useForm from "../../hooks/useForm";
import "../login/auth/loginPage.css";
import "../layout/header/header.css";
function CreateUserForm({ onSubmit }) {
  const { t } = useTranslation();
  const {
    formValue: newUser,
    handleChange,
    handleSubmit,
  } = useForm({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, surname, username, email, password } = newUser;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginPage">
      <h2 className="loginPage-title">
        <i>{t("createuser.title")}</i>
      </h2>
      <label className="label-input">
        <i>{t("createuser.name")}</i>
      </label>
      <div className="input-group">
        <input
          className="input"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <span className="border2"></span>
      </div>

      <label className="label-input">
        <i>{t("createuser.surname")}</i>
      </label>
      <div className="input-group">
        <input
          className="input"
          name="surname"
          value={surname}
          onChange={handleChange}
        />
        <span className="border2"></span>
      </div>
      <label className="label-input">
        <i>{t("createuser.username")}</i>
      </label>

      <div className="input-group">
        <input
          className="input"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <span className="border2"></span>
      </div>
      <label className="label-input">
        <i>{t("createuser.email")}</i>
      </label>
      <div className="input-group">
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <span className="border2"></span>
      </div>

      <label className="label-input">
        <i>{t("createuser.password")}</i>
      </label>

      <div className="input-group">
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <span className="border2"></span>
      </div>
      <button className="button">
        <i>{t("createuser.create-account")}</i>
      </button>

      <a href="/LoginHelp">
        <h5>
          {" "}
          <i>{t("createuser.help2")}</i>
        </h5>
      </a>
    </form>
  );
}

export default CreateUserForm;
