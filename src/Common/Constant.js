export const RECEIVED_ACTION = "RECEIVED_ACTION";

// export default {
//   testHit: "testHit",
// };

export const AuthToken = "";

const isTesting = !true;

const configs = {
  url: isTesting
    ? "http://localhost:8080/api/"
    : "https://hitman-production-0749.up.railway.app/api/",
  fileUrl: isTesting
    ? "http://localhost:8080/"
    : "https://hitman-production-0749.up.railway.app/",
};

export const baseURL = configs.url;
export const fileUrl = configs.fileUrl;
export const isCustomer = true;

export const HTTP = {
  HEADERS: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },

  AuthHeader: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: AuthToken,
  },

  formDataHeader: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: AuthToken,
  },
};
