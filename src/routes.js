import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DashboardContent from "./components/Dashboard/DashboardContent/DashboardContent";
import History from "./components/History/History";
import AddReview from "./components/Reviews/AddReview";
import Payment from "./components/Payment/Payment";
import Reviews from "./components/Reviews/Reviews";

export default (
  <Switch>
    <Route path="/dashboard/content" exact component={DashboardContent} />
    <Route path="/dashboard/profile" component={Profile} />
    <Route path="/dashboard/payment" component={Payment} />
    <Route path="/dashboard/reviews" component={Reviews} />
    <Route path="/dashboard/history" component={History} />
    <Route path="/dashboard/review/:driverId/:id" component={AddReview} />
    {/* <Route path="/explore" component={Explore} /> */}
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
