import React, { useState } from "react";
import { Card } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";

const Department = (props) => {
  const [departments, setDepartment] = useState([...DEPARTMENTS]);
  console.log(departments);
  return (
    <div className="container">
      <div className="row">
        {departments &&
          departments.length > 0 &&
          departments.map((item) => {
            <Card key={item.id}>
              <h3>{item.name}</h3>
              <p>Số lượng nhân viên: {item.numberOfStaff}</p>
            </Card>;
          })}
      </div>
    </div>
  );
};

export default Department;
