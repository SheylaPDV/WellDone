import CreateUserForm from "./CreateUserForm";

import { useLocation, useNavigate } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { createUser } from "./service";
import "../login/auth/loginPage.css";
import { useAuth } from "./context";

function CreateUserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const { isLoading, error, execute, resetError } = useMutation(createUser);

  const handleSubmit = (credentials) => {
    execute(credentials).then(() => {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <CreateUserForm onSubmit={handleSubmit} />
      {isLoading && <p>Welldone..</p>}
      {error && <div onClick={resetError}>{"Invalid credentials"}</div>}
    </div>
  );
}
export default CreateUserPage;
