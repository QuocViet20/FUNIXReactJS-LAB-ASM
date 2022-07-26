import {
  addStaffConstant,
  addStaff,
  staffsLoading,
  staffsFailed,
  addDepartment,
  departmentLoading,
  departmentFailed,
} from "./constant";

import { baseUrl } from "../shared/baseUrl";
export const addListStaffs = (staffs) => ({
  type: addStaffConstant,
  payload: staffs,
});

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffLoading());
  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};

export const staffLoading = () => ({
  type: staffsLoading,
});

export const staffFailed = (errMess) => ({
  type: staffsFailed,
  payload: errMess,
});

export const addStaffs = (staffs) => ({
  type: addStaff,
  payload: staffs,
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading());
  return fetch(baseUrl + "departments");
};

export const departmentsLoading = () => ({
  type: departmentLoading,
});

export const departmentsFailed = (errMess) => ({
  type: departmentFailed,
  payload: errMess,
});

export const addDepartments = (departments) => ({
  type: addDepartment,
  payload: departments,
});
