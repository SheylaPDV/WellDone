import { useCallback, useState } from "react";

function useMutation(mutation) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const execute = useCallback(
    async function (...args) {
      console.log("..args", ...args);
      const startExecution = () => {
        resetError();
        setIsLoading(true);
      };

      const finishExecution = (error) => {
        setIsLoading(false);
        if (error) {
          return setError(error);
        }
      };

      startExecution();
      try {
        const result = await mutation(...args);
        console.log("resuklt", result);
        //alert(result.msg);
        finishExecution(null);
        return result;
      } catch (error) {
        finishExecution(error);
        throw error;
      }
    },
    [mutation]
  );

  return {
    isLoading,
    error,
    execute,
    resetError,
  };
}

export default useMutation;
