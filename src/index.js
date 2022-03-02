import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let test = localStorage.getItem("bankdata");
let obj = {users: [
  {id: 1, username: "JohnD", firstName: "John", lastName: "Doe", email: "john@gmail.com", password: "1234", balance: 500, expenses: [{expenseName: "Electricity bill", amount: 500, expenseID: 1}]},
  {id: 2, username: "JaneD", firstName: "Jane", lastName: "Doe", email: "jane@gmail.com", password: "4321", balance: 1000, expenses: []}
]}
if(test == null){
  localStorage.setItem('bankdata', JSON.stringify(obj))
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

