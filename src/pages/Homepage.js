import React, { useEffect, useState } from "react";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Loading } from "../Components/LoadingComponent";
import { Link, withRouter } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { Control, LocalForm, Errors } from "react-redux-form";
import { addListStaffs, fetchStaffs } from "../redux/action";

function RenderStaff({ staff }) {
  return (
    <Card>
      <Link to={`staff/${staff.id}`}>
        <CardBody>
          <CardImg width="100%" src={staff.image} alt={staff?.name} />
        </CardBody>
      </Link>
      <div>
        <CardTitle className="text-center text-dark ">{staff?.name}</CardTitle>
      </div>
    </Card>
  );
}

const Home = (props) => {
  const dispatch = useDispatch();
  const listStaffs = useSelector((state) => state.staffs);
  console.log(props);
  const listDepartments = useSelector((state) => state.departments);
  const departments = listDepartments.departments;

  const initialStaff = {
    name: "",
    doB: "",
    salaryScale: "1",
    startDate: "",
    departmentId: "Dept01",
    annualLeave: "0",
    overTime: "0",
    salary: "",
    image: "/assets/images/alberto.png",
  };

  const initialErrors = {
    name: "",
    doB: "",
    startDate: "",
    salaryScale: "",
    annualLeave: "",
    overTime: "",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState(initialStaff);
  const [inputSearch, setInputSearch] = useState("");
  const [staffs, setStaffs] = useState(listStaffs.staffs);
  const [errors, setErrors] = useState(initialErrors);

  // useEffect(() => {
  //   dispatch(fetchStaffs());
  // }, []);

  // const handleBlur = () => {
  //   const errors = {
  //     name: "",
  //     doB: "",
  //     startDate: "",
  //     salaryScale: "",
  //     annualLeave: "",
  //     overTime: "",
  //   };
  //   const reg = /^\d+$/;
  //   const isDecimal = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
  //   if (newStaff.name && newStaff.name.length < 3)
  //     errors.name = "Name should be >= 3 characters";

  //   if (newStaff.name && newStaff.name.length > 15)
  //     errors.name = "Name should be <15 characters";

  //   if (newStaff.salaryScale && !isDecimal.test(newStaff.salaryScale))
  //     errors.salaryScale = "salaryScale should contain only numbers";

  //   if (newStaff.annualLeave && !reg.test(newStaff.annualLeave))
  //     errors.annualLeave = "annualLeave should contain only numbers";

  //   if (newStaff.overTime && !reg.test(newStaff.overTime)) {
  //     errors.overTime = "salaryScale should contain only numbers";
  //   }

  //   return setErrors(errors);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "department") {
  //     setNewStaff({
  //       ...newStaff,
  //       department: departments.find((d) => d.name === value),
  //       id: staffs.length,
  //     });
  //   } else {
  //     setNewStaff({
  //       ...newStaff,
  //       [name]: value,
  //       id: staffs.length,
  //     });
  //   }
  // };

  // validate form redux-form
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const isDecimal = (val) => /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/i.test(val);

  const handleSubmitForm = () => {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    const reg = /^\d+$/;
    const isDecimal = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;

    if (!newStaff.name) {
      errors.name = "please input for name";
      setModalOpen(true);
      setErrors(errors);
    }
    if (!newStaff.doB) {
      errors.doB = "please input for birthday";
      setModalOpen(true);
      setErrors(errors);
    }
    if (!newStaff.startDate) {
      errors.startDate = "please input for startDate";
      setModalOpen(true);
      setErrors(errors);
    } else if (newStaff.salaryScale && !isDecimal.test(newStaff.salaryScale)) {
      errors.salaryScale = "salaryScale should contain only numbers";
      setModalOpen(true);
      setErrors(errors);
    } else if (newStaff.annualLeave && !reg.test(newStaff.annualLeave)) {
      errors.annualLeave = "annualLeave should contain only numbers";
      setModalOpen(true);
      setErrors(errors);
    } else if (newStaff.overTime && !reg.test(newStaff.overTime)) {
      errors.overTime = "salaryScale should contain only numbers";
      setModalOpen(true);
      setErrors(errors);
    } else {
      const newListStaffs = [...staffs];
      newListStaffs.push(newStaff);
      setStaffs(newListStaffs);
      setNewStaff(initialStaff);
      setErrors(initialErrors);
      localStorage.setItem("listStaffs", JSON.stringify(newListStaffs));
      setModalOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmitSearch();
  };

  const handleChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    if (inputSearch === "") {
      alert("vui lòng nhập tên nhân viên");
    }

    const searchStaffs = listStaffs.staffs.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setStaffs(searchStaffs);
    setInputSearch("");
  };
  const handleSubmit = (values) => {
    newStaff.name = values.name;
    newStaff.doB = values.doB;
    newStaff.startDate = values.startDate;
    if (!values.select) {
      newStaff.departmentId = "Dept01";
    } else {
      newStaff.departmentId = departments.find(
        (d) => d.name === values.select
      ).id;
    }
    newStaff.salaryScale = values.salaryScale;
    newStaff.annualLeave = values.annualLeave;
    newStaff.overTime = values.overTime;
    newStaff.id = staffs.length;
    newStaff.salary = values.salaryScale * 300000 + values.overTime * 200000;
    newStaff.image = "/assets/images/alberto.png";
    setNewStaff({ ...newStaff });
    const newListStaffs = [...staffs];

    newListStaffs.push(newStaff);

    dispatch(addListStaffs(newListStaffs));

    setStaffs(newListStaffs);
    setNewStaff(initialStaff);

    localStorage.setItem("listStaffs", JSON.stringify(newListStaffs));
    setModalOpen(false);
  };

  const menu = staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-lg-2 col-md-4 my-2">
        <RenderStaff staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="mx-4">
        <div className="my-2 border-bottom mb-2 d-flex row ">
          <h2 className="mb-2">Nhân Viên</h2>
          <div className="row container-fluid ">
            <div className="col-auto col-sm-12  col-lg-2">
              <Button
                onClick={() => setModalOpen(!modalOpen)}
                className="btn  btn-secondary mb-3 "
              >
                Thêm mới
              </Button>
            </div>
            <div className="col-12 col-sm-8 col-lg-6">
              <input
                type="text"
                className="form-control"
                onChange={handleChangeSearch}
                placeholder="Nhập tên nhân viên"
                value={inputSearch}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="col-auto col-sm-3 col-lg-3">
              <button
                type="submit"
                onClick={handleSubmitSearch}
                className="btn btn-primary mb-3 "
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <div className="row">{listStaffs.isLoading ? <Loading /> : menu}</div>
      </div>
      <Modal
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(!modalOpen);
          setNewStaff(initialStaff);
        }}
      >
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          Thêm Nhân Viên
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group my-2">
              <Label htmlFor="name " sm={4}>
                Tên
              </Label>
              <Col sm={8}>
                <Control.text
                  model=".name"
                  name="name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
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
                  name="department"
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

            <Button color="primary">Thêm</Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Home;
