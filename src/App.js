import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>
    );
  }
}

export default App;
