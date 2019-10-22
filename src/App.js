import React, { Component } from "react";
import store from "./store";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import TeamListContainer from "./components/TeamListContainer";
import TeamDetailsContainer from "./components/TeamDetailsContainer";
import LoginFormContainer from "./components/LoginFormContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/teams"> Teams </Link>
        {this.props.loggedIn ? (
          "You're logged in"
        ) : (
          <Link to="/login"> Login</Link>
        )}
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={TeamListContainer} />
        <Route path="/teams/:id" exact component={TeamDetailsContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);
