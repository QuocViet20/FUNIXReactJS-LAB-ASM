import React from "react";
import {
  CardBody,
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "./LoadingComponent";

function RenderStaff({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardBody>
          <CardImg width="100%" src={staff.image} alt={staff.name} />
        </CardBody>
      </Link>
      <div>
        <CardTitle className="text-center text-dark ">{staff.name}</CardTitle>
      </div>
    </Card>
  );
}

function RenderDepartmentDetail({ department }) {
  return (
    <div className="row">
      {department &&
        department.map((staff) => (
          <div key={staff.id} className="col-6 col-lg-2 col-md-4 my-2">
            <RenderStaff staff={staff} />
          </div>
        ))}
    </div>
  );
}

const DepartmentDetail = (props) => {
  const departments = useSelector((state) => state.departments);
  const departmentsDetail = useSelector((state) => state.departmentsDetail);
  console.log(departmentsDetail);

  // const filterStaffs = staffs.filter((d) => {
  //   if (d.department) {
  //     return d;
  //   }
  // });
  // localStorage.setItem("listStaffs", JSON.stringify(filterStaffs));

  return (
    <div className="container">
      {departmentsDetail.isLoading ? (
        <Loading />
      ) : (
        <div className="mx-4">
          <div className="row mt-2 border-bottom ">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/department">Phòng Ban</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active className="text-dark">
                {
                  departments.departments.filter(
                    (d) => d.id === props.departmentName
                  )[0].name
                }
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <RenderDepartmentDetail
            department={departmentsDetail.departmentsDetail}
          />
        </div>
      )}
    </div>
  );
};
export default DepartmentDetail;
