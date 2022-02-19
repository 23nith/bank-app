import {Link} from 'react-router-dom';

const NavBar = ({handleLogout}) => {
    return (  
        <div className="navbar">
            <div className="container row">
                <Link to='/'>
                    <div>Logo</div>
                </Link>
                <div className='button' onClick={handleLogout}>Logout</div>
            </div>
        </div>
    );
}
 
export default NavBar;