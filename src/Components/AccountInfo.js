const AccountInfo = ({user}) => {
    return ( 
        <div className="AccountInfo">
            <div className="info1">{`$ ${user.balance}`}</div>
            <div className="info2">
                <div>6841 3249 8493 5131</div>
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <div className="row">
                    <div>9/11</div><div>Visa</div>
                </div>
            </div>
        </div>
     );
}
 
export default AccountInfo;