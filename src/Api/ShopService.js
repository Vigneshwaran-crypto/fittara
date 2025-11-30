import { HTTP, baseURL } from "../Common/Constant";
import apiHit from "./AxiosInstance";

export const placeOrder = (req) => {
  return apiHit({
    url: baseURL + "placeOrder",
    headers: HTTP.formDataHeader,
    method: "post",
    data: req,
  });
};

export const getAllOrders = (req) => {
  return apiHit({
    url: baseURL + "getAllOrders",
    headers: HTTP.HEADERS,
    method: "get",
    data: req,
  });
};

export const getHello = () => {
  return apiHit({
    url: "http://localhost:8081/hello",
    headers: HTTP.HEADERS,
    method: "get",
  });
};

// we acces the server from the client ,
// What we need server address , - http://localhost:8081/"apiName"
