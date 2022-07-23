import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponents";
import { baseUrl } from "../shared/baseUrl";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}
function RenderComments({ comments }) {
  console.log(comments);

  return (
    <div className="container">
      <h3>Comments</h3>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="col-12 col-md-7 m-1">
            <CardTitle>rating:{comment.rating}</CardTitle>
            <CardTitle>{comment.comment}</CardTitle>
            <CardTitle>
              --{comment.author} {dateFormat(comment.date, "dd/mm/yyyy")}
            </CardTitle>
          </div>
        ))}
    </div>
  );
}

const DishDetail = (props) => {
  console.log(props.dishesLoading);
  if (props.dishesLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishesErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishesErrMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  }
};

export default DishDetail;
