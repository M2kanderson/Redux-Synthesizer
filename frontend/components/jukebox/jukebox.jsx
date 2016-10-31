import React from 'react';
import Track from './track';

const Jukebox = ({tracks, isRecording, isPlaying, onPlay}) => {
  let list;
  if(Object.keys(tracks).length > 0){
    list = Object.keys(tracks).map((track) => <Track key={tracks[track].name}
                                            track={tracks[track]}
                                            isRecording={isRecording}
                                            isPlaying={isPlaying}
                                            onPlay={onPlay}></Track>);
  }
  else {
    list = "";
  }

  return <div>{list}</div>
};


export default Jukebox;
