import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS } from "../actions/teams";

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TEAMS_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];

    case TEAM_CREATE_SUCCESS:
      return [...state, { ...action.payload }];

    // case 'DELETE_TEAM'
    //   return state.filter() // filter out the team that you deleted

    default:
      return state;
  }
};
