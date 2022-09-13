import client, {
  configureClient,
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`/v1/auth`, credentials)
    .then(({ accessToken }) => {
      configureClient({ accessToken });
      return accessToken;
    })
    .then((accessToken) => {
      storage.remove("auth");
      if (remember) {
        storage.set("auth", accessToken);
      }
    });
};

export const getUsers = async () => {
  return client.get("/v1/users");
};

export const getUserId = async (userId) => {
  return client.get(`/v1/users/${userId}`);
};
export const deleteUserId = async (userId) => {
  console.log("USERID:",userId);
  return client.delete(`/v1/users/${userId}`);
};

export const createUser = async (newUser) => {
  return client.post("/v1/users", newUser);
};

export const modifyUser = async (modify) => {
  return client.put("/v1/users", modify);
};
export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};
