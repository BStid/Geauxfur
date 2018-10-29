import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "./components/Title/Title";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";

export default (
  <Switch>
    <Route path="/" exact component={Title} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/explore" component={Explore} />
    {/* <Route path="/item/:id" component={ListItem} /> */}
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
