import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import Home from "../pages/Homepage.js";
import StaffDetail from "./StaffDetail";
import Department from "../pages/DepartmentPage";

const Main = () => {
  const [staffs, setStaffs] = useState([...STAFFS]);

  return (
    <div>
      {/* <Home staffs={staffs} />;
      <StaffDetail staff={staffs[0]} />; */}
      <Department />
    </div>
  );
};

export default Main;
