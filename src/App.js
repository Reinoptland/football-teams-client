import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TeamListContainer from "./components/TeamListContainer";
import TeamDetailsContainer from "./components/TeamDetailsContainer";
import LoginFormContainer from "./components/LoginFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/teams"> Teams </Link>
          <Link to="/login"> Login</Link>
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={TeamListContainer} />
          <Route path="/teams/:id" exact component={TeamDetailsContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
