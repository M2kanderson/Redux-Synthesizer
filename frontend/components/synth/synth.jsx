import React from 'react';
import Note from '../../util/note';
import {NOTE_NAMES, TONES } from '../../util/tones';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map( (note) => new Note(TONES[note]));
    this.props = props;
  }
  onKeyDown(e){
    this.props.keyPressed(e.key);
  }
  onKeyUp(e){
    this.props.keyReleased(e.key);
  }
  componentDidMount(){
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }
  playNotes(){
    NOTE_NAMES.forEach( (note, idx) => {
      if(this.props.notes.includes(note))
      {
        this.notes[idx].start();
      }
      else {
        this.notes[idx].stop();
      }
    });
  }
  render() {
    let list = NOTE_NAMES.map( (note, idx) => {
      if(this.props.notes.includes(note))
      {
        return note;
      }
    });
    this.playNotes();
    return (
      <div>
      {list}
      </div>
    );
  }
}

export default Synth;
