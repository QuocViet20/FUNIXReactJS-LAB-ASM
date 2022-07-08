import React, { useState } from "react";
import { Card } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";
import { Link } from "react-router-dom";

const Department = (props) => {
  const [departments, setDepartment] = useState([...DEPARTMENTS]);
  console.log(departments);
  return (
    <div className="container">
      <div className="px-4 row">
        {departments &&
          departments.length > 0 &&
          departments.map((item) => (
            <div className="col-12 col-lg-4 col-md-6 py-2 px-2">
              <Link to={`department/${item.name}`}>
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
