import {
  addStaffConstant,
  addStaff,
  staffsLoading,
  staffsFailed,
  addDepartment,
  departmentLoading,
  departmentFailed,
  addNewStaff,
} from "./constant";

import { baseUrl } from "../shared/baseUrl";
export const addListStaffs = (staffs) => ({
  type: addStaffConstant,
  payload: staffs,
});

export const fetchStaffs = () => async (dispatch) => {
  dispatch(staffLoading());
  return await fetch(baseUrl + "staffs")
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
  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)));
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

export const addNewStaffs = (newStaff) => ({
  type: addNewStaff,
  payload: newStaff,
});

export const fetchNewStaff = (newStaff) => (dispatch) => {
  return fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addNewStaffs(response)))
    .catch((error) => {
      console.log("post newstaffs", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};
