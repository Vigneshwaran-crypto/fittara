import moment from "moment/moment";

export const dtFormed = (dt) => {
  return moment(dt).isValid() ? moment(dt).format("DD-MMM-yyyy") : dt;
};
