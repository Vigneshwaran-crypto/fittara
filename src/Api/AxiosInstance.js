import axios from "axios";
import { HTTP, baseURL } from "../Common/Constant";

const makeApi = axios.create({
  headers: HTTP.AuthHeader,
  baseURL: baseURL,
});

makeApi.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default makeApi;
