import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading } from "../Components/LoadingComponent";
import { fetchStaffsSalary } from "../redux/action";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Salary = () => {
  const staffsSalary = useSelector((state) => state.staffsSalary);
  const listStaffs = staffsSalary.staffsSalary;
  console.log(listStaffs);
  const [sortStaffs, setSortStaffs] = useState(listStaffs);
  const [selectSort, setSelectSort] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e) => {
    setSelectSort(e.target.value);
    const selectedSort = e.target.value;

    if (selectedSort === "1") {
      const tempt = sortStaffs.sort((a, b) =>
        a.id > b.id ? 1 : a.id < b.id ? -1 : 1
      );
      setSortStaffs(tempt);
    }
    if (selectedSort === "2") {
      const tempt = sortStaffs.sort((a, b) =>
        a.salaryScale > b.salaryScale
          ? 1
          : a.salaryScale < b.salaryScale
          ? -1
          : 1
      );
      setSortStaffs(tempt);
    }
    if (selectedSort === "3") {
      const tempt = sortStaffs.sort((a, b) =>
        a.overTime > b.overTime ? 1 : a.overTime < b.overTime ? -1 : 0
      );
      setSortStaffs(tempt);
    }
    if (selectedSort === "4") {
      const tempt = sortStaffs.sort((a, b) =>
        a.salary > b.salary ? 1 : a.salary < b.salary ? -1 : 1
      );
      setSortStaffs(tempt);
    }
  };

  const handleChangeSearch = (e) => {
    setInputSearch(e.target.value);
  };
  const handleSubmit = () => {
    if (inputSearch === "") {
      alert("vui lòng nhập tên nhân viên cần tìm kiếm");
    }
    const tempt = staffsSalary.staffsSalary.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setSortStaffs(tempt);
    setInputSearch("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className=" container">
      {staffsSalary.isLoading ? (
        <Loading />
      ) : (
        <div className="row mx-4">
          <div className=" col-12 row mt-2 border-bottom d-flex justify-content ">
            <div className="col-12 col-sm-8 col-lg-6  mt-2">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home" className=" ">
                    スタッフ
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active className="text-dark">
                  給与
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="col-12 col-sm-7 col-lg-6 row d-flex align-items-center">
              <div className=" col-sm-3 col-lg-3 align-items-right ">
                <h5 className="text-danger text-right ">昇順</h5>
              </div>
              <div className=" col-sm-9 col-lg-9 ">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  onChange={handleChange}
                  value={selectSort}
                >
                  <option value="1" selected>
                    従業員コード
                  </option>
                  <option value="2">給料係数</option>
                  <option value="3">残業日数</option>
                  <option value="4">給料</option>
                </select>
              </div>
            </div>
            <div className="row col-12 col-sm-12 col-lg-6 mt-1 d-flex">
              <div class="col-12 col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleChangeSearch}
                  placeholder="社員の氏名を入力してください。"
                  value={inputSearch}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div class="col-auto ">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="btn btn-primary mb-3"
                >
                  検索
                </button>
              </div>
            </div>
          </div>
          {sortStaffs.length > 0 &&
            sortStaffs.map((item) => (
              <div className="col-12 col-sm-6 col-lg-4 p-2">
                <Card key={item.id} className="px-4 pt-2">
                  <h3>{item.name}</h3>
                  <p>従業員コード: {item.id}</p>
                  <p>給料係数: {item.salaryScale}</p>
                  <p>残業日数: {item.overTime}</p>
                  <CardBody className="bg-light">
                    <CardTitle className="bg-light px-4 text-success">
                      給料: {item.salary}
                    </CardTitle>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Salary;
