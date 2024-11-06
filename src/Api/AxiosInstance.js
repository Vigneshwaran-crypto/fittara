import axios from "axios";
import { HTTP, baseURL } from "../Common/Constant";
import { clearLocalStorage } from "../Common/SessionHandler";

const makeApi = axios.create({
  headers: HTTP.AuthHeader,
  baseURL: baseURL,
});

makeApi.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      // Token expires handle all the logout protocols
      window.location.href = "/login";
      clearLocalStorage();
      console.log("TOKEN EXPIRES", err);
    }

    return Promise.reject(err);
  }
);

export default makeApi;
