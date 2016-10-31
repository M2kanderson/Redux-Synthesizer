import { START_PLAYING, STOP_PLAYING } from '../actions/playing_actions';

const _defaultState = false;
const isPlayingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_PLAYING:
      return true;
    case STOP_PLAYING:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
