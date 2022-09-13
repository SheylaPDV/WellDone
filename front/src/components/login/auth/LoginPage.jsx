import "./loginPage.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../service";
import useMutation from "../../../hooks/useMutation";
import { useAuth } from "../context";
import LoginForm from "./LoginForm";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const { isLoading, error, execute, resetError } = useMutation(login);

  const handleSubmit = (credentials) => {
    execute(credentials)
      .then(handleLogin)
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>Welldone..</p>}
      {error && <div onClick={resetError}>{"Invalid email or username"}</div>}
    </div>
  );
}
export default LoginPage;
