export const RECEIVED_ACTION = "RECEIVED_ACTION";

// export default {
//   testHit: "testHit",
// };

export const AuthToken = "";

// 172.16.16.22

// export const baseURL = "http://172.16.16.22:8080/api/"; //gramium
// export const baseURL = "http://192.168.0.101:8080/api/"; //act
// export const baseURL = "http://192.168.226.211:8080/api/"; //your mobile
export const baseURL = "http://localhost:8080/api/"; //your mobile

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
