import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

const Main = () => {
  const [dishes, setDishes] = useState([...DISHES]);
  const [dishId, setDishId] = useState(null);

  console.log(dishes);
  const onDishSelect = (dishId) => {
    setDishId(dishId);
  };
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Quoc viet</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === dishId)[0]} />
    </div>
  );
};

export default Main;
