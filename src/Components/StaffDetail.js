import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function RenderStaffDetail({ item }) {
  return (
    <div className=" row">
      <div className="col-lg-3 col-md-4 col-12 my-2">
        <CardImg width="100%" src={item.image} alt={item.name} />
      </div>
      <div className=" col-lg-9 col-md-8 col-12 my-2">
        <h5>{item.name}</h5>
        <p>Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
        <p>Ngày vào công ty: {dateFormat(item.startDate, "dd/mm/yyyy")}</p>
        <p>Phòng ban: {item.department.name}</p>
        <p>Số ngày nghỉ còn lại: {item.annualLeave}</p>
        <p>Số ngày đã làm thêm: {item.overTime}</p>
      </div>
    </div>
  );
}

const StaffDetail = ({ staff }) => {
  return (
    <div className="container">
      <div className="mx-4">
        <RenderStaffDetail item={staff} />
      </div>
    </div>
  );
};

export default StaffDetail;
