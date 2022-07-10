import React, { Component } from "react";
import dateFormat, { masks } from "dateformat";
import { Card, CardTitle, CardText } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }
  onDishSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderDish(staff) {
    if (staff != null)
      return (
        <Card body>
          <CardTitle tag="h5">{staff.name}</CardTitle>
          <CardTitle>
            Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
          </CardTitle>
          <CardTitle>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardTitle>
          <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
          <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
          <CardTitle>Số ngày làm thêm: {staff.overTime}</CardTitle>
        </Card>
      );
    else
      return (
        <div>
          <CardTitle tag="h5">Bấm vào tên nhân viên để xem thông tin</CardTitle>
        </div>
      );
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-3 col-sm-5 m-2 ">
          <Card key={staff.id} onClick={() => this.onDishSelect(staff)}>
            <CardTitle className="px-1">{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container my-1">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
