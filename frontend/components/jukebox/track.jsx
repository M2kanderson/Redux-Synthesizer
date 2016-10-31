import React from 'react';

const Track = (props) => (
  <div>
  <div>{props.track.name}</div>
  <button className="play-button"
    disabled={props.isRecording || props.isPlaying ? true : false}
    onClick={props.onPlay(props.track)}>Play</button>
  </div>

)

export default Track;
