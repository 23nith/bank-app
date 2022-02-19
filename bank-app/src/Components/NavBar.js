import {Link} from 'react-router-dom';

const NavBar = ({handleLogout}) => {
    return (  
        <div className="navbar">
            <div className="container row">
                <Link to='/bank-app'>
                    <div>Logo</div>
                </Link>
                <div className='button' onClick={handleLogout}>Logout</div>
            </div>
        </div>
    );
}
 
export default NavBar;