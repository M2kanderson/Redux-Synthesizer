import React from 'react';
import $ from 'jquery';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.newTrackName = "";
  }
  handleRenameChange(e){
    this.newTrackName = e.target.value;
    this.forceUpdate();
  }
  renameTrack(){
    this.props.onRename(this.props.track.id, this.newTrackName)();
    $('.rename-input').val("");
  }

  render() {
    return (
      <div className="track">
        <p className='track-name'>{this.props.track.name}</p>
        <div className='track-buttons'>
          <button className="play-button"
            disabled={this.props.isRecording || this.props.isPlaying ? true : false}
            onClick={this.props.onPlay}>Play</button>
          <button className="delete-button"
            disabled={this.props.isRecording || this.props.isPlaying ? true : false}
            onClick={this.props.onDelete}>Delete</button>
          <input className="rename-input" placeholder="New Name" onChange={this.handleRenameChange.bind(this)}></input>
          <button className="rename-button"
            disabled={this.props.isRecording || this.props.isPlaying ? true : false}
            onClick={this.renameTrack.bind(this)}>Rename</button>
        </div>

      </div>

    );
  }
}

// function Track(props) {
//
//
//   const handleRenameChange = (e) =>{
//     this.newTrackName = e.target.value;
//     console.log(this.newTrackName);
//   }
//   return (
//     <div className="track">
//       <p>{this.newTrackName}</p>
//       <p className='track-name'>{props.track.name}</p>
//       <div className='track-buttons'>
//         <button className="play-button"
//           disabled={props.isRecording || props.isPlaying ? true : false}
//           onClick={props.onPlay}>Play</button>
//         <button className="delete-button"
//           disabled={props.isRecording || props.isPlaying ? true : false}
//           onClick={props.onDelete}>Delete</button>
//         <input className="rename-input" placeholder="New Name" onChange={handleRenameChange}></input>
//         <button className="rename-button"
//           disabled={props.isRecording || props.isPlaying ? true : false}
//           onClick={props.onRename(props.track.id, this.newTrackName)}>Rename</button>
//       </div>
//
//     </div>
//
//   );
// }



export default Track;
