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
