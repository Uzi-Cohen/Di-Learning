import React from 'react';
import ReactDOM from 'react-dom';
import Exercise2 from './components/Exercise2';
import './index.css';
import App from './App';
import Exercise1 from './components/Exercise1'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Exercise1 />
    <Exercise2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
