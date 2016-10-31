import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones'

const _defaultState = [];

const notesReducer = (oldState = _defaultState, action) => {
Object.freeze(oldState);
const index = oldState.indexOf(action.key);

switch (action.type) {
  case KEY_PRESSED:
    if(NOTE_NAMES.includes(action.key) && index === -1)
    {
      return [...oldState, action.key]
    }
    else {
      return oldState;
    }
  case KEY_RELEASED:
    if(index !== -1)
    {
      return [...oldState.slice(0,index), oldState.slice(index + 1)];
    }
    else {
      return oldState;
    }

  default:
    return oldState;

  }
}

export default notesReducer;
