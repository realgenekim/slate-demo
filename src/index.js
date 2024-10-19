import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'First paragraph.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Second paragraph.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Third paragraph.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Fourth paragraph.' }],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Editor initialValue={initialValue} />
  </React.StrictMode>,
  document.getElementById('root')
);
