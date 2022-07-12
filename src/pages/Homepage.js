import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  return (
    <Card>
      <Link to={`staff/${staff.id}`}>
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

const Home = ({ listStaffs }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [staffs, setStaffs] = useState([...listStaffs]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleSubmit = () => {
    if (inputSearch === "") {
      alert("vui lòng nhập tên nhân viên");
    }

    const searchStaffs = listStaffs.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );

    setStaffs(searchStaffs);
    setInputSearch("");
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
            <div class="col-auto col-sm-12  col-lg-2">
              <Button
                onClick={() => setModalOpen(!modalOpen)}
                class="btn  btn-secondary mb-3 "
              >
                Thêm mới
              </Button>
            </div>
            <div class="col-12 col-sm-8 col-lg-6">
              <input
                type="text"
                class="form-control"
                onChange={handleChange}
                placeholder="Nhập tên nhân viên"
                value={inputSearch}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div class="col-auto col-sm-3 col-lg-3">
              <button
                type="submit"
                onClick={handleSubmit}
                class="btn btn-primary mb-3 "
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          Thêm Nhân Viên
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                Tên
              </Label>
              <Col sm={8}>
                <Input type="text" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                Ngày sinh
              </Label>
              <Col sm={8}>
                <Input type="date" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                Ngày vào công ty
              </Label>
              <Col sm={8}>
                <Input type="date" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                phòng ban
              </Label>
              <Col sm={8}>
                <Input type="text" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                hệ số lương
              </Label>
              <Col sm={8}>
                <Input type="text" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col sm={8}>
                <Input type="text" id="username" name="username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="username " sm={4}>
                Số ngày đã làm thêm
              </Label>
              <Col sm={8}>
                <Input type="text" id="username" name="username" />
              </Col>
            </FormGroup>

            <Button type="submit" value="submit" color="primary">
              Thêm
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Home;
