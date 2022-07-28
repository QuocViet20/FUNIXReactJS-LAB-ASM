import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import {
  addStaffConstant,
  addStaff,
  staffsLoading,
  staffsFailed,
  addDepartment,
  departmentLoading,
  departmentFailed,
  addDepartmentDetail,
  departmentDetailLoading,
  departmentDetailFailed,
  addStaffsSalary,
  staffsSalaryLoading,
  StaffsSalaryFailed,
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

export const departmentsReducer = (
  state = { isLoading: true, errMess: null, departments: [] },
  action
) => {
  switch (action.type) {
    case addDepartment: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        departments: action.payload,
      };
    }
    case departmentLoading: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        departments: [],
      };
    }
    case departmentFailed: {
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

export const departmentsDetailReducer = (
  state = { isLoading: true, errMess: null, departmentsDetail: [] },
  action
) => {
  switch (action.type) {
    case addDepartmentDetail: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        departmentsDetail: action.payload,
      };
    }
    case departmentDetailLoading: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        departmentsDetail: [],
      };
    }
    case departmentDetailFailed: {
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

export const staffsSalaryReducer = (
  state = { isLoading: true, errMess: null, staffsSalary: [] },
  action
) => {
  switch (action.type) {
    case addStaffsSalary: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffsSalary: action.payload,
      };
    }
    case staffsSalaryLoading: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        staffsSalary: [],
      };
    }
    case StaffsSalaryFailed: {
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
