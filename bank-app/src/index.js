import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let test = localStorage.getItem("data");
let obj = {users: [
  {id: 1, firstName: "John", lastName: "Doe", email: "john@gmail.com", password: "1234", balance: 500},
  {id: 2, firstName: "Jane", lastName: "Doe", email: "jane@gmail.com", password: "4321", balance: 1000}
]}
if(test == null){
  localStorage.setItem('data', JSON.stringify(obj))
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

