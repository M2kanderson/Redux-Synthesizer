import React from 'react';

const Recorder = ({isRecording, isPlaying, startRecording, stopRecording}) => (
  <div className='recorder'>
    <h2 className='recorder-title'>
      Recorder
    </h2>
    <div className="recorder-buttons">
      <button className = 'start-button'
              onClick={startRecording}
              disabled={isRecording || isPlaying}>
        Start
      </button>
      <button className= 'stop-button'
              onClick={stopRecording}
              disabled={!isRecording || isPlaying}>
        Stop
      </button>
    </div>

  </div>
)

export default Recorder;
