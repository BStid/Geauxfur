import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./components/Title/Title";
import Dashboard from "./components/Dashboard/Dashboard";

// import { CookiesProvider, withCookies } from "react-cookie";

import store from "./redux/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Title} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
