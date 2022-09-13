import "./loginPage.css";
import useForm from "../../../hooks/useForm";
import "../../layout/header/header.css";
import { useTranslation } from "react-i18next";

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit }) {
  const { t } = useTranslation();
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: "",
    username: "",
    password: "",
    remember: true,
  });
  const { username, email, password } = credentials;

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="loginPage-title">
          <i>{t("login.login-to-welldone")}</i>
        </h2>
        <label className="label-input">
          <i>{t("login.email")}</i>
        </label>
        <div className="input-group">
          <input
            className="input"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <span className="border2"></span>
        </div>

        <label className="label-input">
          <i>{t("login.username")}</i>
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
          <i>{t("login.password")}</i>
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

        <button
          className="button"
          disabled={!validate(validEmail, validPassword)}
        >
          <i>{t("login.login")}</i>
        </button>
        <a href="/createAccount">
          <h5>
            <i>{t("login.create-account")}</i>
          </h5>
        </a>
        <a href="/LoginHelp">
          <h5>
            <i>{t("login.help")}</i>
          </h5>
        </a>
      </form>
    </div>
  );
}
export default LoginForm;
