import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from "../../actions/playing_actions";
import { groupUpdate } from '../../actions/notes_actions';
import Jukebox from './jukebox';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  onPlay: (track) => e => {
    dispatch(startPlaying())
    let playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed = 0;
    let interval = setInterval(() => {
      if(currNote < track.roll.length)
      {
        if((Date.now() - playBackStartTime) > track.roll[currNote].timeSlice)
        {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote += 1;
        }
      }
      else {
        window.clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1)
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
