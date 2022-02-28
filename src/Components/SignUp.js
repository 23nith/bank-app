import {useState} from "react";
import { useHistory } from "react-router-dom";

const SignUp = ({handleSignUp}) => {
    const [firstName, setfirstName] = useState(null)
    const [lastName, setlastName] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [initialDeposit, setinitialDeposit] = useState(null)
    const [username, setUsername] = useState(null)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let id = Math.random();
        handleSignUp({id, username, firstName, lastName, email, password, balance: parseInt(initialDeposit), expenses: []} )
        history.push("/bank-app");
    }

    const handleOnChange = (e) => {
        switch(e.target.id){
            case "firstName":
                setfirstName(e.target.value);
                break;
            case "lastName":
                setlastName(e.target.value);
                break;
            case "email":
                setemail(e.target.value);
                break;
            case "password":
                setpassword(e.target.value);
                break;
            case "initialDeposit":
                setinitialDeposit(e.target.value);
                break;
            case "username":
                setUsername(e.target.value);
                break;
        }
    }

    const handleBack = () => {
        history.push("/bank-app");
    }

    return ( 
        <form className="signup" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input onChange={handleOnChange} required type="text" id="firstName"/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={handleOnChange} required type="text" id="lastName"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={handleOnChange} required type="email" id="email"/>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input onChange={handleOnChange} required type="text" id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={handleOnChange} required type="password" id="password"/>
            </div>
            <div>
                <label htmlFor="initialDeposit" >Initial Deposit</label>
                <input onChange={handleOnChange} required type="number" id="initialDeposit" min='1000' step='500' />
            </div>
            <div className="signUpBtns">
                <button className="loginBtn">Submit</button>
                <button onClick={handleBack} className="whiteBtn">Back</button>
            </div>
        </form>
    );

    

}
 
export default SignUp;