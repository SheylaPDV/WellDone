import useForm from "../../hooks/useForm";
import "../layout/header/header.css";
import "../login/auth/loginPage.css";
import "./updateUser.css";
import { useTranslation } from "react-i18next";
import useFormUser from "../../hooks/useFormUser";

export default function UpdateUserForm({ user, onSubmit, onSubmitDelete }) {
  const { t } = useTranslation();

  // const _id = user._id;
  console.log("user", user);
  const {
    formValue: modify,
    handleChange,
    handleSubmit,
    handleSubmitDelete,
  } = useFormUser({
    _id: user._id,
    name: user.name,
    surname: user.surname,
    username: user.username,
    email: user.email,
    password: "",
  });

  const { name, surname, username, email, password } = modify;
  console.log(password);

  return (
    <>
      <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <i>
            <h4>
              {t("update.username")}
              {user.username}
            </h4>
            {t("update.username2")}
          </i>
        </label>
        <input onChange={handleChange} name="username" value={username}></input>
        <label>
          <i>
            <h4>
              {t("update.name")} {user.name}
            </h4>
            {t("update.name2")}
          </i>
        </label>
        {/* <input id="_id" value={user._id}></input> */}
        <input onChange={handleChange} name="name" value={name}></input>
        <label>
          <i>
            {" "}
            <h4>
              {t("update.surname")} {user.surname}
            </h4>
            {t("update.surname2")}
          </i>
        </label>
        <input onChange={handleChange} name="surname" value={surname}></input>
        <label>
          <i>
            <h4>
              {t("update.email")} {user.email}
            </h4>
            {t("update.email2")}
          </i>
        </label>
        <input onChange={handleChange} name="email" value={email}></input>
        {/* <i>
          <h4>Old Password:</h4> Enter your password
        </i>
        <input
          onChange={handleChange}
          name="password"
          value={oldPassword}
        ></input> */}
        <i>
          <h4>{t("update.password")}</h4>
          {t("update.password2")}
        </i>
        <input onChange={handleChange} type="password" name="password"></input>
        <button className="button" name="edit" type="onSubmit">
          <i>{t("update.edit")}</i>
        </button>
        <button
          className="button"
          id="delete"
          onClick={handleSubmitDelete(onSubmitDelete)}
        >
          <i>{t("update.delete")}</i>
        </button>
      </form>
    </>
  );
}
