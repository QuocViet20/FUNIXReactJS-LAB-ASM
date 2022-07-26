import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import {
  addStaffConstant,
  addStaff,
  staffsLoading,
  staffsFailed,
} from "./constant";

export const initialState = {
  staffs: localStorage.getItem("listStaffs")
    ? JSON.parse(localStorage.getItem("listStaffs"))
    : [...STAFFS],
  department: [...DEPARTMENTS],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case addStaffConstant: {
      return {
        ...state,

        staffs: action.payload,
      };
    }

    default:
      return state; // luôn phải trả ra trị default trong switch case
  }
};

export const staffsReducer = (
  state = { isLoading: true, errMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case addStaff: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    }
    case staffsLoading: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        staffs: [],
      };
    }
    case staffsFailed: {
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    }
    default:
      return state;
  }
};
