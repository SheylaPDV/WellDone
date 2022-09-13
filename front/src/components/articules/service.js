import client from "../../api/client";

const articuleBaseUrl = "/v1/articules"

export const getLastedArticules = async () => {
    const url = articuleBaseUrl;
    return client.get(url);
}

export const createArticule = async (newArticule) => {
    const url = articuleBaseUrl;
  return client.post(url, newArticule, 
    {headers: {'content-type': 'multipart/form-data'}}
    );
};
