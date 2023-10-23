import React from 'react';
import ReactDOM from 'react-dom';
import './App2.css';
import About from '../src/components/AboutComponent';
import Playlist from './Playlist'
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <About />
//   </React.StrictMode>,
//   document.getElementById('playlist')
// );

// ReactDOM.render(<About />, document.getElementById("id"));

const root = ReactDOM.createRoot(document.getElementById('id'));
root.render(
  <React.StrictMode>
    <Playlist />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
