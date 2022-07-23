import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponents";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ item, dishesLoading, dishesErrMess }) {
  if (dishesLoading) {
    return <Loading />;
  } else if (dishesErrMess) {
    return <h4>{dishesErrMess}</h4>;
  } else
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  console.log(props.dishesLoading);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            dishesLoading={props.dishesLoading}
            dishesErrMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            dishesLoading={props.promoLoading}
            dishesErrMess={props.promoErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.leader}
            dishesLoading={props.leadersLoading}
            dishesErrMess={props.leadersErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
