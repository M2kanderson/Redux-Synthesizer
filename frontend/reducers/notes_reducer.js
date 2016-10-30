import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import NOTE_NAMES from '../util/tones'

const _defaultState = [];

export const reducer = (oldState = _defaultState, action) => {
Object.freeze(state);

switch (action.type) {
  case KEY_PRESSED:
    if(NOTE_NAMES[action.key])
    {
      return [...oldState, action.key]
    }
    else {
      return oldState;
    }
  case KEY_RELEASED:
    if(NOTE_NAMES[action.key])
    {
      let index = oldState.indexOf(action.key);
      return [...oldState.slice(0,index), oldState.slice(index + 1)];
    }
    else {
      return oldState;
    }

  default:
    return oldState;

  }
}
