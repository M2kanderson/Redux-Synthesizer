import React from 'react';

const NoteKey = ({note, pressed}) => (
  <div className={pressed ? 'pressed' : 'not-pressed'}>
    {note}
  </div>
);

export default NoteKey;
