import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Homepage";
import TrafficLight from "./TrafficLight";
import Carousel from "./Carousel";
import AppToDo from "./components/AppToDo";
import AppTodo2Box from "./AppTodo2Box";
import AppShopping from "./AppShopping";
import AppTabComponents from "./AppTabComponents";
import AppTodoListAndComplete from "./AppTodoListAndComplete";
export default class MyWeb extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trafficlight" component={TrafficLight} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/apptodo" component={AppToDo} />
          <Route path="/apptodo2box" component={AppTodo2Box} />
          <Route path="/appshopping" component={AppShopping} />
          <Route path="/apptabcomponents" component={AppTabComponents} />
          <Route
            path="/apptodoandcomplete"
            component={AppTodoListAndComplete}
          />
        </Switch>
      </div>
    );
  }
}
