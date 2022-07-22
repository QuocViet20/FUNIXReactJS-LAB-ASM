import React, { useEffect, useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../redux/action";

const Main = () => {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);

  // const [comments, setComments] = useState(props.comments);
  // const [promotions, setPromotions] = useState(props.promotions);
  // const [leaders, setLeaders] = useState(props.leaders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  console.log(dishes);
  const HomePage = () => {
    // console.log(dishes.dishes);
    return (
      <Home
        dish={dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={dishes.isLoading}
        dishesErrMess={dishes.errMess}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        dishesLoading={dishes.isLoading}
        dishesErrMess={dishes.errMess}
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/contactus" component={Contact} />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={dishes.dishes} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
  );
};

export default Main;
