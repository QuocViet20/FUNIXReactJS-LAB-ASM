import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import Home from "../pages/Homepage.js";
import StaffDetail from "./StaffDetail";
import DepartmentDetail from "./DepartmentDetail";
import Department from "../pages/DepartmentPage";
import Salary from "../pages/SalaryPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const Main = () => {
  const [staffs, setStaffs] = useState([...STAFFS]);
  const [departmentName, setDepartmentName] = useState("");

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staff={
          staffs.filter(
            (staff) => staff.id === parseInt(match.params.staffId, 10)
          )[0]
        }
      />
    );
  };

  const DepartmentFilter = ({ match }) => {
    setDepartmentName(match.params.departmentId);
    console.log(match);
    return (
      <DepartmentDetail
        department={staffs.filter(
          (staff) => staff.department.name === match.params.departmentId
        )}
        departmentName={departmentName}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home staffs={staffs} />} />
        <Route exact path="/department" component={Department} />
        <Route
          exact
          path="/salary"
          component={() => <Salary staffs={staffs} />}
        />
        <Route path="/staff/:staffId" component={StaffWithId} />
        <Route path="/department/:departmentId" component={DepartmentFilter} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
