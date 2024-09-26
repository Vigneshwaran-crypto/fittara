import { SAVE_USER } from "./Types";

export const saveUser = (data) => {
  return {
    type: SAVE_USER,
    data,
  };
};
