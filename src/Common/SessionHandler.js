export const setUserToken = (token) => {
  localStorage.setItem("token", token);
};

export const getUserToken = () => {
  let validToken = "Bearer " + localStorage.getItem("token");
  return validToken || "";
};

export const clearLocalStorage = () => {
  localStorage.removeItem("token");
};
