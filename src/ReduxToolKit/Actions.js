import { MODIFIED_MESH, PATH_NAME, SAVE_USER, SHOP_DETAILS } from "./Types";

export const saveUser = (data) => {
  return {
    type: SAVE_USER,
    data,
  };
};

export const shopDetailsStore = (data) => {
  return {
    type: SHOP_DETAILS,
    data,
  };
};

export const setCurPath = (data) => {
  return {
    type: PATH_NAME,
    data,
  };
};
