import { MODIFIED_MESH, SAVE_USER } from "./Types";

export const saveUser = (data) => {
  return {
    type: SAVE_USER,
    data,
  };
};
