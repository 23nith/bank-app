// const visaImage = new URL('./images/visa.png', import.meta.url);

const AccountInfo = ({user, visaImage, expenseTotal}) => {
    return ( 
        <div className="AccountInfo">
            <div className="info1">{`$ ${user.balance}`}</div>
            <div className="info2">
                <div>6841 3249 8493 5131</div>
                <div className="row">
                    <div>
                        <div className="date">9/11</div> 
                        <div>{`${user.firstName} ${user.lastName}`}</div>

                    </div>
                    {/* <div className="visa"><i className="fab fa-cc-visa"></i></div> */}
                    <div>
                        <img src={visaImage} alt="" style={{height: "65px"}} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AccountInfo;