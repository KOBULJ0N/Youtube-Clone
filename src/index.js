import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import Context from './Context'


ReactDOM.render(
  <React.StrictMode>
    <Context>
     <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
