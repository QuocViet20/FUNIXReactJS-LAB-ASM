import React, { useState } from "react";
import { Card } from "reactstrap";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const Department = () => {
  const staffs = useSelector((state) => state.staffs);
  const departments = useSelector((state) => state.departments);

  departments.departments.forEach((d) => {
    d.numberOfStaff = staffs.staffs.filter(
      (item) => item.departmentID === d.id
    ).length;
  });
  console.log(
    departments.departments.forEach((d) => {
      d.numberOfStaff = staffs.staffs.filter(
        (item) => item.departmentId === d.id
      ).length;
    })
  );
  return (
    <div className="container">
      <div className="px-4 row">
        {departments.departments.length > 0 &&
          departments.departments.map((item) => (
            <div className="col-12 col-lg-4 col-md-6 py-2 px-2">
              <Link to={`department/${item.id}`}>
                <Card key={item.id} className="p-2 mt-2">
                  <h3 className="text-dark">{item.name}</h3>
                  <p className="text-dark">
                    Số lượng nhân viên: {item.numberOfStaff}
                  </p>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Department;
