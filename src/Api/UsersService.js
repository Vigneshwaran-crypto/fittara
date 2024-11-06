import { HTTP, baseURL } from "../Common/Constant";
import apiHit from "./AxiosInstance";

export const authenticateUser = (req) => {
  return apiHit({
    url: baseURL + "authenticate",
    headers: HTTP.HEADERS,
    method: "post",
    data: JSON.stringify(req),
  });
};

export const signup = (req) => {
  return apiHit({
    url: baseURL + "signup",
    headers: HTTP.HEADERS,
    method: "post",
    data: JSON.stringify(req),
  });
};

export const verifyUser = (req) => {
  return apiHit({
    url: baseURL + "verifyUser",
    headers: HTTP.HEADERS,
    method: "post",
    data: JSON.stringify(req),
  });
};

export const updateUser = (req) => {
  return apiHit({
    url: baseURL + "updateUser",
    headers: HTTP.HEADERS,
    method: "post",
    data: JSON.stringify(req),
  });
};

export const getUserByDomain = (req) => {
  return apiHit({
    url: baseURL + "getUserByDomain",
    headers: HTTP.HEADERS,
    method: "post",
    data: JSON.stringify(req),
  });
};

export const saveProduct = (req) => {
  return apiHit({
    url: baseURL + "saveProduct",
    headers: HTTP.formDataHeader,
    method: "post",
    data: req,
  });
};

export const saveModal = (req) => {
  return apiHit({
    url: baseURL + "saveModel",
    headers: HTTP.formDataHeader,
    method: "post",
    data: req,
  });
};
