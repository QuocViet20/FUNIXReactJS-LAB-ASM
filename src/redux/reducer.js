import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

export const initialState = {
  staffs: localStorage.getItem("listStaffs")
    ? JSON.parse(localStorage.getItem("listStaffs"))
    : [...STAFFS],
  department: [...DEPARTMENTS],
};

export const Reducer = (state = initialState, action) => {
  return state;
};
