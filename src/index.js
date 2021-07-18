import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UpdateCountDown } from './components/Time/time';


ReactDOM.render(
  <React.StrictMode>
    <UpdateCountDown>
      <App />
    </UpdateCountDown>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

