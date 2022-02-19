import {useState} from "react";
import ActionsMenu from "./Components/ActionsMenu";
import AccountInfo from "./Components/AccountInfo";
import Expenses from "./Components/Expenses";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("data")).users);
  const [currentUser, setcurrentUser] = useState(users[1]);
  const [showMsg, setshowMsg] = useState(false);
  const [showAcctInfo, setshowAcctInfo] = useState(false)
  const [showLogin, setshowLogin] = useState(true)

  const handleLogin = (e) => {
    setshowMsg(false);
    let thisUser = users.filter(user => {
      return user.firstName == e.name && user.password == e.password;
    })
    if(thisUser[0] == undefined){
      console.log("no user")
      setshowMsg(true);
      return;
    }
    thisUser = thisUser[0];
    setcurrentUser(thisUser);
    setshowAcctInfo(true);
    setshowLogin(false);
  }  

  const handleLogout = () => {
    setshowAcctInfo(false);
    setshowLogin(true);
  }

  const handleSignUp = (object) => {
    console.log(object);
    let newUsers = [...users, object];
    let obj = {users: [...users]}
    localStorage.setItem("data", JSON.stringify(obj))
    setusers(newUsers);
  }

  return (
    <Router>
      <div className="App">
        <NavBar handleLogout={handleLogout}/>
        <div className="toCenter">
          <div className="container">
            <Switch>
              <Route exact path="/">
                {showLogin && <Login handleLogin={handleLogin} showMsg={showMsg}/>}
                {
                  showAcctInfo &&
                  <div className="dashboard">
                    <AccountInfo user={currentUser}/>
                    <ActionsMenu />
                    <Expenses/>
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
