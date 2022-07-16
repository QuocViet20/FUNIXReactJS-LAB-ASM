import React, { useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const Main = () => {
  const [dishes, setDishes] = useState(dishes);
  const [comments, setComments] = useState([...comments]);
  const [promotions, setPromotions] = useState([...promotions]);
  const [leaders, setLeaders] = useState([...leaders]);

  console.log(dishes);

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
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
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Main));
