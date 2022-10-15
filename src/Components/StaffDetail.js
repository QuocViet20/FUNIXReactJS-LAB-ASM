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
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./LoadingComponent";
import { fetchPatchNewStaff, fetchStaffs, fetchDelete } from "../redux/action";

function RenderStaffDetail({
  item,
  modalOpen,
  setModalOpen,
  id,
  handleDelete,
}) {
  const departments = useSelector((state) => state.departments);
  return (
    <div>
      {departments.isLoading ? (
        <Loading />
      ) : (
        <div className=" row my-2">
          <div className="col-lg-3 col-md-4 col-12 my-2">
            <CardImg width="100%" src={item.image} alt={item.name} />
          </div>
          <div className=" col-lg-9 col-md-8 col-12 my-2">
            <h3>氏名: {item.name}</h3>
            <p>生年月日: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
            <p>入社日: {dateFormat(item.startDate, "dd/mm/yyyy")}</p>
            <p>
              デパートメント:
              {
                departments.departments.find((d) => d.id === item.departmentId)
                  .name
              }
            </p>
            <p>有給休暇: {item.annualLeave}</p>
            <p>残業日: {item.overTime}</p>
            <div className="row">
              <div className="col-auto  ">
                <Button
                  onClick={() => setModalOpen(!modalOpen)}
                  className="btn  btn-success mb-3 "
                >
                  編集
                </Button>
              </div>
              <div className="col-auto  ">
                <Button
                  onClick={() => handleDelete()}
                  className="btn  btn-danger mb-3 "
                >
                  削除
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const StaffDetail = (props) => {
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staffs);
  console.log(props.id);
  const handleDelete = () => {
    if (window.confirm("are you sure to delete?")) {
      dispatch(fetchDelete(props.id));
    }
  };

  const staff = staffs.staffs.find((d) => d.id === props.id);

  const [staffEdit, setStaffEdit] = useState(staff);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(staffEdit);
  const required = (val) => (isNaN(val) ? val && val.length : val);
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const isDecimal = (val) => /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/i.test(val);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffEdit({ ...staffEdit, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(fetchPatchNewStaff(staffEdit));
    dispatch(fetchStaffs());
  };

  return (
    <div>
      {staffs.isLoading ? (
        <Loading />
      ) : (
        <div>
          {staff ? (
            <div className="container">
              <div className="mx-4">
                <div className="row mt-2 border-bottom ">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="/home">スタッフ</Link>
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
                  handleDelete={handleDelete}
                />
              </div>
              <Modal
                isOpen={modalOpen}
                toggle={() => {
                  setModalOpen(!modalOpen);
                  setStaffEdit(staff);
                }}
              >
                <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                  スタッフ情報編集
                </ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={handleSubmit}>
                    <Row className="form-group my-2">
                      <Label htmlFor="name " sm={4}>
                        氏名
                      </Label>
                      <Col sm={8}>
                        <Control.text
                          model=".name"
                          name="name"
                          value={staffEdit.name}
                          defaultValue={staffEdit.name}
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
                        生年月日
                      </Label>
                      <Col sm={8}>
                        <Control
                          model=".doB"
                          type="date"
                          id="doB"
                          name="doB"
                          onChange={handleChange}
                          defaultValue={dateFormat(staffEdit.doB, "yyyy-mm-dd")}
                          value={dateFormat(staffEdit.doB, "yyyy-mm-dd")}
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
                        入社日
                      </Label>
                      <Col sm={8}>
                        <Control
                          model=".startDate"
                          type="date"
                          id="startDate"
                          name="startDate"
                          onChange={handleChange}
                          defaultValue={dateFormat(
                            staffEdit.startDate,
                            "yyyy-mm-dd"
                          )}
                          value={dateFormat(staffEdit.startDate, "yyyy-mm-dd")}
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
                        デパートメント
                      </Label>
                      <Col sm={8}>
                        <Control.select
                          model=".select"
                          id="department"
                          name="departmentId"
                          onChange={handleChange}
                          defaultValue={staffEdit.departmentId}
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
                        給料係数
                      </Label>
                      <Col sm={8}>
                        <Control.text
                          model=".salaryScale"
                          name="salaryScale"
                          onChange={handleChange}
                          value={staffEdit.salaryScale}
                          defaultValue={staffEdit.salaryScale}
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
                        有給休暇
                      </Label>
                      <Col sm={8}>
                        <Control.text
                          model=".annualLeave"
                          name="annualLeave"
                          onChange={handleChange}
                          defaultValue={staffEdit.annualLeave}
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
                        残業日数
                      </Label>
                      <Col sm={8}>
                        <Control.text
                          model=".overTime"
                          name="overTime"
                          onChange={handleChange}
                          defaultValue={staffEdit.overTime}
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

                    <Button color="primary">更新</Button>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </div>
          ) : (
            <div className="container">
              <h2>スタッフがいません！</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StaffDetail;
