import React from 'react';
import Track from './track';

const Jukebox = ({tracks, isRecording, isPlaying, onPlay, onDelete, onRename}) => {
  let list;
  if(Object.keys(tracks).length > 0){
    list = Object.keys(tracks).map((track_id) => <Track key={tracks[track_id].id}
                                            track={tracks[track_id]}
                                            isRecording={isRecording}
                                            isPlaying={isPlaying}
                                            onPlay={onPlay(tracks[track_id])}
                                            onDelete={onDelete(track_id)}
                                            onRename={onRename}></Track>);
  }
  else {
    list = "";
  }

  return <div className="jukebox">
    <h2>Tracks</h2>
    <div className="tracks">
      {list}
    </div>
  </div>
};


export default Jukebox;
