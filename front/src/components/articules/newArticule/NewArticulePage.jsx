import { useLocation, useNavigate } from "react-router-dom";
import { createArticule } from "../service";
import useMutation from "../../../hooks/useMutation";
import NewArticuleForm from "./NewArticuleForm";

function NewArticulePage() {
//   const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, error, execute, resetError } = useMutation(createArticule);

  const handleSubmit = (credentials) => {
    execute(credentials).then(() => {
        const from = "/";
        navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <NewArticuleForm onSubmit={handleSubmit} />
      {isLoading && <p>Welldone..</p>}
      {error && <div onClick={resetError}>{error.message}</div>}
    </div>
  );
}
export default NewArticulePage;
