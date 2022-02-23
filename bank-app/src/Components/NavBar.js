import {Link} from 'react-router-dom';

const NavBar = ({handleLogout, showLogin, bankIcon, pattern7}) => {
    return (  
        <>
        <div className="navbar">
        <div className="navbar" style={{backgroundImage: `url(${pattern7})`,
            backgroundRepeat: "repeat",
            backgroundSize: "110px", height: '50px', opacity: 0.02, zIndex: -1, position: 'absolute',
            top: 0}}>
        </div>
            <div className="container row">
                <Link to='/bank-app'>
                    <i className="fa fa-university"></i>
                    {/* <div style={{color: "white"}}>
                    <img src={bankIcon} alt="" style={{height: '50px', width: "50px", zIndex: 2}} />    
                        Bank of the East   
                    </div> */}
                </Link>
                {!showLogin && <div className='button signout' onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></div>}
            </div>
        </div>
        </>
    );
}
 
export default NavBar;