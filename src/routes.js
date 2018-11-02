import React from "react";
import { Switch, Route } from "react-router-dom";
// import Title from "./components/Title/Title";
// import Explore from "./components/Explore/Explore";
import Profile from "./components/Profile/Profile";
import DashboardContent from "./components/Dashboard/DashboardContent/DashboardContent";
import EditInfo from "./components/Profile/EditInfo";

export default (
  <Switch>
    <Route path="/dashboard/content" exact component={DashboardContent} />
    <Route path="/dashboard/profile" component={Profile} />
    <Route path="/dashboard/editinfo" component={EditInfo} />
    {/* <Route path="/explore" component={Explore} /> */}
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
