import {Link} from 'react-router-dom';

const NavBar = ({handleLogout, showLogin}) => {
    return (  
        <div className="navbar">
            <div className="container row">
                <Link to='/bank-app'>
                    <i class="fa fa-university"></i>           
                </Link>
                {!showLogin && <div className='button signout' onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></div>}
            </div>
        </div>
    );
}
 
export default NavBar;