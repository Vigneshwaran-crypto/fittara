export const setUserToken = (token) => {
  sessionStorage.setItem("token", token);
};

export const getUserToken = (token) => {
  let validToken = "Bearer " + sessionStorage.getItem("token");
  return validToken || "";
};
