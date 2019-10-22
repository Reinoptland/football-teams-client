import request from "superagent";

export const TEAMS_FETCHED = "TEAMS_FETCHED";

const baseUrl = "http://localhost:4000";

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  payload: teams
});

export const loadTeams = () => (dispatch, getState) => {
  // Request is not made

  // how to debug:
  // - console.log(getState()) to see what getState() returns
  // check the logic to see if it's correct
  // - console.log(getState().teams.length !== 0) // does this check pass?

  // guard statement that checks if we already have teams
  if (getState().teams.length !== 0) return;

  // - put a console.log below you guard statement to see if it passes
  // console.log('Guard statement passed??')

  // Check if request is made succesfully
  request(`${baseUrl}/teams`) // url correct? -> make request with httpie first
    .then(response => {
      // console.log(response) -> have a look at the body of the request or status code
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(teamsFetched(response.body)); // check redux devtools if action got dispatched
    })
    .catch(console.error); // if you don't console response, check the console for errors
};

export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS";

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  payload: team
});

export const createTeam = data => dispatch => {
  request
    .post(`${baseUrl}/teams`)
    .send(data)
    .then(response => {
      dispatch(teamCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";

const fetchTeamSuccess = team => ({
  type: FETCH_TEAM_SUCCESS,
  payload: team
});

export const loadTeam = id => (dispatch, getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  request(`${baseUrl}/teams/${id}`).then(response => {
    console.log(response);
    dispatch(fetchTeamSuccess(response.body));
  });
};
