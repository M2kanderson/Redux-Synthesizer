import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';

window.Note = Note;

const App = () => (
  <div>Hello World!</div>
)

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
