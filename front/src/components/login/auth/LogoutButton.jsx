import { NavLink } from "react-router-dom";
import { logout } from "../service";
import useMutation from "../../../hooks/useMutation";
import { AuthContextConsumer, useAuth } from "../context";
import "../../layout/header/header.css";
import { useTranslation } from "react-i18next";

function LogoutButton({ className }) {
  const { t } = useTranslation();

  const { isLogged, handleLogout } = useAuth();
  const mutation = useMutation(logout);
  const handleLogoutClick = async () => {
    await mutation.execute();
    handleLogout();
  };

  return isLogged ? (
    <>
      <NavLink to="/login">
        <button className={className} onClick={handleLogoutClick}>
          <i>{t("logout.button")}</i>
        </button>
      </NavLink>
      <div className="buttons">
        <NavLink to="/articules">
          <a className="button-settings">
            <i>{t("login.home")}</i>
          </a>
        </NavLink>
        <NavLink to="/new-articule">
          <a className="button-settings">
            <i>{t("login.write")}</i>
          </a>
        </NavLink>
        <NavLink to="/settings">
          <a className="button-settings">
            <i>{t("login.edit")}</i>
          </a>
        </NavLink>
      </div>
    </>
  ) : (
    <NavLink to="/login">
      <button className={className}>{t("login.button")}</button>
    </NavLink>
  );
}

const ConnectedAuthButton = (props) => (
  <AuthContextConsumer>
    {(auth) => <LogoutButton {...auth} {...props} />}
  </AuthContextConsumer>
);
export default ConnectedAuthButton;
