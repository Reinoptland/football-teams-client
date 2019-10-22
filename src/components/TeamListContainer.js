import React from "react";
import { loadTeams } from "../actions/teams";
import { connect } from "react-redux";
import TeamsList from "./TeamsList";
import CreateTeamFormContainer from "./CreatTeamFormContainer";

class TeamsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <TeamsList teams={this.props.teams} />
        <CreateTeamFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state); // check what the state is
  return {
    teams: state.teams // check react devtools, if the component has props.teams
  };
};

export default connect(
  mapStateToProps,
  { loadTeams }
)(TeamsListContainer);
