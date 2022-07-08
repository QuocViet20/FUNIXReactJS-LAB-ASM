import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

function RenderStaff({ staff }) {
  return (
    <Card key={staff.id}>
      <CardBody>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
      </CardBody>
      <CardTitle className="text-center">{staff.name}</CardTitle>
    </Card>
  );
}

const Home = ({ staffs }) => {
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
        <div className="my-2 border-bottom mb-2">
          <h2 className="mb-2">Nhân Viên</h2>
        </div>
        <div className="row">{menu}</div>
      </div>
    </div>
  );
};
export default Home;
