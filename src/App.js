import {useState, useEffect} from "react";
import ActionsMenu from "./Components/ActionsMenu";
import AccountInfo from "./Components/AccountInfo";
import Expenses from "./Components/Expenses";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserList from "./Components/UserList";
import useLink from "./Components/useLink";
import Footer from "./Components/Footer";

const bankPicture = new URL('./images/BankBGPictureBright.png', import.meta.url);
const bankIcon = new URL('./images/BankIcon.png', import.meta.url);
const pattern7 = new URL('./images/pattern7.png', import.meta.url);
const pattern8 = new URL('./images/pattern8.png', import.meta.url);
const visaImage = new URL('./images/visa.png', import.meta.url);

function App() {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("bankdata")).users);
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

  const editExpense = (expenseToEdit) => {
    let newUsers = [...users];
    let modifiedUsers = newUsers.map((user)=>{
      if(user.id == currentUser.id){
        let modifiedExpense = user.expenses.map((expense)=>{
          if(expense.expenseID == expenseToEdit.expenseID){
            expense.amount = expenseToEdit.amount;
            expense.expenseName = expenseToEdit.expenseName;
          }
          return expense;
        })
        user.expense = modifiedExpense;
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

  useEffect(()=> {
    let test = localStorage.getItem("bankdata");
    let obj = {users: [
      {id: 1, username: "JohnD", firstName: "John", lastName: "Doe", email: "john@gmail.com", password: "1234", balance: 500, expenses: [{expenseName: "Electricity bill", amount: 500, expenseID: 1}]},
      {id: 2, username: "JaneD", firstName: "Jane", lastName: "Doe", email: "jane@gmail.com", password: "4321", balance: 1000, expenses: []}
    ]}
    if(test == null){
      localStorage.setItem('bankdata', JSON.stringify(obj))
    }
  }, [])

  return (
    <Router>
      <div className="App" style={{background: `url(${bankPicture})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <NavBar handleLogout={handleLogout} showLogin={showLogin} bankIcon={bankIcon} pattern7={pattern7}/>
        <div className="toCenter">
          <div className="container">
            <Switch>
              <Route exact path="/bank-app">
                {showLogin && <Login handleLogin={handleLogin} showMsg={showMsg} setShowMsg={setShowMsg}/>}
                {
                  showAcctInfo &&
                  <div className="dashboard">
                    <div className="firstRow">
                      <AccountInfo visaImage={visaImage} user={currentUser}/>
                      <ActionsMenu currentUser={currentUser} handleDeposit={handleDeposit} handleWithdraw={handleWithdraw} handleSendMoney={handleSendMoney} users={users} applyExpenses={applyExpenses} currentUser={currentUser}/>
                    </div>
                    <div className="secondRow">
                      <button className="toggleList" onClick={toggleListToShow}>{showExpense ? "Show User List" : "Show Expense"}</button>
                      {showUserList && <UserList users={users}/>}
                      {showExpense && <Expenses editExpense={editExpense} currentUser={currentUser} expenseTotal={expenseTotal} AddExpense={AddExpense} deleteExpense={deleteExpense}/>}
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
        <Footer pattern8={pattern8}/>
      </div>
    </Router>
  );
}

export default App;
