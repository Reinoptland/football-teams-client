import { TEAMS_FETCHED } from '../actions/teams'

export default (state = [], action) => {
    switch (action.type) {
        case TEAMS_FETCHED:
            return [...state, ...action.payload]
        
        default:
            return state
    }
}