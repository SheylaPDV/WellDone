import { createContext, useContext, useEffect, useState } from "react";
import { getLastedArticules } from "../articules/service";

const AuthContext = createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const articles = await getLastedArticules();
      setArticles(articles);
    };
    execute();

    return () => {};
  }, []);

  return articles;
};

export default AuthContext;
