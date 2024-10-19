import React from 'react';
import ReactDOM from 'react-dom';
import { BasicOutliner, initialOutline } from './components/BasicOutliner';

ReactDOM.render(
  <React.StrictMode>
    <BasicOutliner initialValue={initialOutline} />
  </React.StrictMode>,
  document.getElementById('root')
);
