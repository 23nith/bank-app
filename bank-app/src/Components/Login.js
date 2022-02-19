import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Login = ({handleLogin, showMsg}) => {
    const [name, setname] = useState(null);
    const [password, setpassword] = useState(null);
    const [page, setpage] = useState("/")

    const handleOnChange = (e) => {
        if(e.target.id == "name"){
            setname(e.target.value);
        }else{
            setpassword(e.target.value);
        }
    }     

    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleLogin({name, password})
    }

    

    return (  
        // <form className="signup" >
        <form className="signup" onSubmit={handleSubmit}>

            {showMsg && <div>Wrong username or password</div>}

            <div>
                <label htmlFor="name">Userame</label>
                <input type="text" id="name" onChange={handleOnChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleOnChange}/>
            </div>
            <div>
                {/* <Link to={page}><button>Login</button></Link> */}
                <button>Login</button>
            </div>
            <div>
                Don't have an account? <Link to="/SignUp">Sign up</Link>
            </div>
            
        </form>
    );
}
 
export default Login;