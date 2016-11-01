import { START_RECORDING, STOP_RECORDING, ADD_NOTES, DELETE_TRACK, RENAME_TRACK} from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;
const tracksReducer = (state = {}, action) =>{
    Object.freeze(state);
    let nextState;
    switch (action.type) {
      case START_RECORDING:
        currTrackId += 1;
        let track = {[currTrackId]:{id: currTrackId, name: `Track ${currTrackId}`, roll: [], timeStart: action.timeNow}};
        return merge({},state, track);
      case STOP_RECORDING:
        return merge({}, state, {[currTrackId]:{
          roll: [
            ...state[currTrackId].roll,
            {notes: [], timeSlice: action.timeNow - state[currTrackId].timeStart}]}});
      case ADD_NOTES:
        return merge({}, state, {[currTrackId]:{roll: [...state[currTrackId].roll, {notes: action.notes, timeSlice: action.timeNow - state[currTrackId].timeStart}]}});
      case DELETE_TRACK:
        nextState = merge({}, state);
        delete nextState[action.id];
        return nextState;
      case RENAME_TRACK:
        nextState = merge({}, state)
        nextState[action.id].name = action.name;
        return nextState;
      default:
        return state;
    }
}

export default tracksReducer;
