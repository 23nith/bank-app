import {useState} from "react";
import ActionsMenu from "./Components/ActionsMenu";
import AccountInfo from "./Components/AccountInfo";
import Expenses from "./Components/Expenses";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserList from "./Components/UserList";
import useLink from "./Components/useLink";


function App() {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("data")).users);
  const [currentUser, setCurrentUser] = useState(users[1]);
  const [showMsg, setShowMsg] = useState(false);
  const [showAcctInfo, setShowAcctInfo] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showExpense, setShowExpense] = useState(false);
  const [showUserList, setShowUserList] = useState(true);
  const [expenseTotal, setExpenseTotal] = useState(null);

  useLink('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');

  const getUser = (theUser) => {
    let obj = users.filter(user => {
      return user.username == theUser.name && user.password == theUser.password;
    })
    return obj;
  }

  const getExpenseTotal = (theUser) => {
    let expenses = 0;
    for(let item of theUser.expenses){
      expenses += parseInt(item.amount);
    }
    return expenses;
  }

  const handleLogin = (e) => {
    setShowMsg(false);
    let thisUser = getUser(e);
    if(thisUser[0] == undefined){
      console.log("no user")
      setShowMsg(true);
      return;
    }
    thisUser = thisUser[0];
    setCurrentUser(thisUser);
    setShowAcctInfo(true);
    setShowLogin(false);
    setExpenseTotal(getExpenseTotal(thisUser));
  }  

  const handleLogout = () => {
    setShowAcctInfo(false);
    setShowLogin(true);
  }

  const handleSignUp = (object) => {
    console.log(object);
    let newUsers = [...users, object];
    let obj = {users: [...newUsers]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
    setusers(newUsers);
  }

  const handleDeposit = (depositValue) => {
    console.log("handleDeposit")
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        // user.balance += depositValue;
        user.balance = user.balance + depositValue;
      }
      return user;
    })
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  const handleWithdraw = (withdrawValue) => {
    console.log("handleWithdraw")
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        // user.balance -= withdrawValue;
        user.balance = user.balance - withdrawValue;
      }
      return user;
    })
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  const handleSendMoney = (sendAmount, sendToID) => {
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        // user.balance -= sendAmount;
        user.balance = user.balance - sendAmount;
      }
      if(user.id == sendToID){
        // user.balance += sendAmount;
        user.balance = user.balance + sendAmount;
      }
      return user;
    })
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  const toggleListToShow = () => {
    setShowExpense(!showExpense);
    setShowUserList(!showUserList);
  }

  const AddExpense = (newExpense) => {
    console.log("test 2")
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        user.expenses = [...user.expenses, newExpense]
      }
      return user;
    })
    setExpenseTotal(getExpenseTotal(currentUser));
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  const deleteExpense = (expenseID) => {
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        let theNewExpense = user.expenses.filter((expense)=>{
          return expense.expenseID != expenseID
        })
        user.expenses = theNewExpense;
      }
      return user;
    })
    setExpenseTotal(getExpenseTotal(currentUser));
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  const applyExpenses = () => {
    console.log("apply expense")
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        user.balance -= expenseTotal;
        user.expenses = [];
      }
      return user;
    })
    setExpenseTotal(getExpenseTotal(currentUser));
    setusers(modifiedUsers);
    let obj = {users: [...users]}
    localStorage.setItem("bankdata", JSON.stringify(obj))
  }

  return (
    <Router>
      <div className="App">
        <NavBar handleLogout={handleLogout} showLogin={showLogin}/>
        <div className="toCenter">
          <div className="container">
            <Switch>
              <Route exact path="/bank-app">
                {showLogin && <Login handleLogin={handleLogin} showMsg={showMsg}/>}
                {
                  showAcctInfo &&
                  <div className="dashboard">
                    <div className="firstRow">
                      <AccountInfo user={currentUser} expenseTotal={expenseTotal}/>
                      <ActionsMenu handleDeposit={handleDeposit} handleWithdraw={handleWithdraw} handleSendMoney={handleSendMoney} users={users} applyExpenses={applyExpenses} currentUser={currentUser}/>

                    </div>
                    <div className="secondRow">
                      <button className="toggleList" onClick={toggleListToShow}>{showExpense ? "Show User List" : "Show Expense"}</button>
                      {showUserList && <UserList users={users}/>}
                      {showExpense && <Expenses currentUser={currentUser} expenseTotal={expenseTotal} AddExpense={AddExpense} deleteExpense={deleteExpense}/>}
                    </div>
                  </div>
                }
              </Route>
              <Route path="/SignUp">
                <SignUp handleSignUp={handleSignUp}/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
