import React from "react";
import { CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RenderStaffDetail({ item }) {
  const departments = useSelector((state) => state.departments);
  console.log(departments.departments);
  console.log(
    departments.departments.filter((d) => d.id === item.departmentId)[0]
  );
  return (
    <div className=" row my-2">
      <div className="col-lg-3 col-md-4 col-12 my-2">
        <CardImg width="100%" src={item.image} alt={item.name} />
      </div>
      <div className=" col-lg-9 col-md-8 col-12 my-2">
        <h3>Họ và tên: {item.name}</h3>
        <p>Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
        <p>Ngày vào công ty: {dateFormat(item.startDate, "dd/mm/yyyy")}</p>
        <p>
          Phòng ban:{" "}
          {
            departments.departments.filter((d) => d.id === item.departmentId)[0]
              .name
          }
        </p>
        <p>Số ngày nghỉ còn lại: {item.annualLeave}</p>
        <p>Số ngày đã làm thêm: {item.overTime}</p>
      </div>
    </div>
  );
}

const StaffDetail = (props) => {
  console.log(props.id);
  const staffs = useSelector((state) => state.staffs);
  console.log(staffs.staffs);
  const staff = staffs.staffs.find((d) => d.id === props.id);

  return staff ? (
    <div className="container">
      <div className="mx-4">
        <div className="row mt-2 border-bottom ">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="text-dark">
              {staff?.name}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <RenderStaffDetail item={staff} />
      </div>
    </div>
  ) : (
    <div className="container">
      <h2>Nhân viên không tồn tại</h2>
    </div>
  );
};

export default StaffDetail;
