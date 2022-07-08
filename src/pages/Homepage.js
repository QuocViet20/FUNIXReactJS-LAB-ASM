import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
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

const Home = ({ staffs }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [staff, setStaffs] = useState([...staffs]);

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

    const searchStaffs = staffs.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );

    setStaffs(searchStaffs);
    setInputSearch("");
  };

  const menu = staff.map((staff) => {
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
          <div className="row ">
            <div class="col-12 col-sm-8">
              <input
                type="text"
                class="form-control"
                onChange={handleChange}
                placeholder="Nhập tên nhân viên"
                value={inputSearch}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div class="col-auto ">
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
    </div>
  );
};
export default Home;
