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
