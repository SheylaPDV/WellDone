import { useEffect, useState } from "react";
import useMutation from "../../hooks/useMutation";
import storage from "../../utils/storage";
// import { useAuth } from "./context";
import { deleteUserId, getUserId, modifyUser } from "./service";
import UpdateUserForm from "./UpdateUserForm";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import "./updateUser.css";
import { useTranslation } from "react-i18next";
import { removeAuthorizationHeader } from "../../api/client";

export default function UpdateUserPage() {
  const { t } = useTranslation();

  const [users, setUsers] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const execute = useMutation(modifyUser);
  const executeDelete = useMutation(deleteUserId);

  const handleSubmit = (credentials) => {
    execute.execute(credentials).then(() => {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    });
  };

  const handleSubmitDelete = (credentials) => {
    executeDelete.execute(credentials).then(() => {
      removeAuthorizationHeader();
      storage.remove("auth");
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    });
  };

  const token = storage.get("auth");
  const decoded = jwt_decode(token);
  const { id } = decoded;

  useEffect(() => {
    getUserId(id).then((data) => {
      setUsers(data);
    });
  }, [id]);

  return (
    <>
      <div>
        <h1 className="about-you">
          <i>{t("update.title")}</i>
        </h1>

        <i className="about-you">{t("update.title2")}</i>

        {users ? (
          <UpdateUserForm
            onSubmit={handleSubmit}
            user={users}
            onSubmitDelete={handleSubmitDelete}
          />
        ) : (
          <h1> {t("update.nousers")}</h1>
        )}
      </div>
    </>
  );
}
