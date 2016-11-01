import React from 'react';
import SynthContainer from "./synth/synth_container";
import RecorderContainer from "./recorder/recorder_container";
import JukeboxContainer from "./jukebox/jukebox_container";

const App = () => (
  <div className='app'>
    <h1>Synthesizer</h1>
    <SynthContainer></SynthContainer>
    <RecorderContainer></RecorderContainer>
    <JukeboxContainer></JukeboxContainer>
  </div>
)

export default App;
