import React, { useState } from "react";
import {
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function RenderStaffDetail({ item, modalOpen, setModalOpen }) {
  const departments = useSelector((state) => state.departments);
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
        <div className="col-auto col-sm-12  col-lg-2">
          <Button
            onClick={() => setModalOpen(!modalOpen)}
            className="btn  btn-success mb-3 "
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

const StaffDetail = (props) => {
  console.log(props.id);
  const staffs = useSelector((state) => state.staffs);
  console.log(staffs.staffs);
  const staff = staffs.staffs.find((d) => d.id === props.id);

  const [staffEdit, setStaffEdit] = useState(staff);
  const [modalOpen, setModalOpen] = useState(false);

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const isDecimal = (val) => /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/i.test(val);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffEdit({ ...staffEdit, [name]: value });
  };

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
        <RenderStaffDetail
          item={staff}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      <Modal
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(!modalOpen);
          // setNewStaff(initialStaff);
        }}
      >
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          Sửa Thông Tin Nhân Viên
        </ModalHeader>
        <ModalBody>
          <LocalForm>
            <Row className="form-group my-2">
              <Label htmlFor="name " sm={4}>
                Tên
              </Label>
              <Col sm={8}>
                <Control.text
                  model=".name"
                  name="name"
                  value={staffEdit.name}
                  className="form-control"
                  onChange={handleChange}
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(20),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 20 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="doB " sm={4}>
                Ngày sinh
              </Label>
              <Col sm={8}>
                <Control
                  model=".doB"
                  type="date"
                  id="doB"
                  name="doB"
                  onChange={handleChange}
                  value={staffEdit.startDate}
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".doB"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="startDate " sm={4}>
                Ngày vào công ty
              </Label>
              <Col sm={8}>
                <Control
                  model=".startDate"
                  type="date"
                  id="startDate"
                  name="startDate"
                  onChange={handleChange}
                  value={staffEdit.startDate}
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".startDate"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="department " sm={4}>
                phòng ban
              </Label>
              <Col sm={8}>
                <Control.select
                  model=".select"
                  id="department"
                  name="departmentId"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="salaryScale " sm={4}>
                hệ số lương
              </Label>
              <Col sm={8}>
                <Control.text
                  model=".salaryScale"
                  id="salaryScale"
                  name="salaryScale"
                  onChange={handleChange}
                  value={staffEdit.salaryScale}
                  placeholder="1.0->3.0"
                  className="form-control"
                  validators={{
                    required,
                    isDecimal,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                    isDecimal: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="annualLeave " sm={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col sm={8}>
                <Control.text
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  onChange={handleChange}
                  value={staffEdit.annualLeave}
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group my-2">
              <Label htmlFor="overTime " sm={4}>
                Số ngày đã làm thêm
              </Label>
              <Col sm={8}>
                <Control.text
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  onChange={handleChange}
                  value={staffEdit.overTime}
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>

            <Button color="primary">Cập Nhật</Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  ) : (
    <div className="container">
      <h2>Nhân viên không tồn tại</h2>
    </div>
  );
};

export default StaffDetail;
