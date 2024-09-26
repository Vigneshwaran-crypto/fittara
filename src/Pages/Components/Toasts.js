import swal from "sweetalert2";

export const inputErrorToast = (what) => {
  swal.fire({
    title: "Please enter " + what,
    position: "top",
    icon: "error",
  });
};

export const successToast = (title) => {
  swal.fire({
    title: title,
    position: "top",
    icon: "success",
  });
};

export const infoToast = (title) => {
  swal.fire({
    title: title,
    position: "top",
    icon: "info",
  });
};
