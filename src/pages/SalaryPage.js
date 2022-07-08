import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Salary = ({ staffs }) => {
  const [sortStaffs, setSortStaffs] = useState([...staffs]);
  const [selectSort, setSelectSort] = useState("1");
  const handleChange = (e) => {
    setSelectSort(e.target.value);
    if (selectSort === 1) {
    }
  };
  return (
    <div className=" container">
      <div className="row px-4">
        <div className="row mt-2 border-bottom d-flex justify-content ">
          <div className="col-12 col-sm-5  mt-2">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home" className=" ">
                  Nhân Viên
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active className="text-dark">
                Bảng Lương
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-12 col-sm-7  row d-flex align-items-center">
            <div className=" col-sm-3 col-lg-2 align-items-right ">
              <p className="text-danger text-right ">Sắp xếp</p>
            </div>
            <div className=" col-sm-9 col-lg-10 ">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={handleChange}
                value={selectSort}
              >
                <option value="1" selected>
                  theo mã nhân viên
                </option>
                <option value="2">theo hệ số lương</option>
                <option value="3">theo số ngày làm thêm</option>
                <option value="3">theo lương</option>
              </select>
            </div>
          </div>
        </div>
        {staffs.length > 0 &&
          staffs.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4 p-2">
              <Card key={item.id} className="px-4 pt-2">
                <h3>{item.name}</h3>
                <p>Mã nhân viên: {item.id}</p>
                <p>Hệ số lương: {item.salaryScale}</p>
                <p>Số ngày làm thêm: {item.overTime}</p>
                <CardBody className="bg-light">
                  <CardTitle className="bg-light px-4">
                    Lương: {item.salaryScale * 300000 + item.overTime * 200000}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Salary;
