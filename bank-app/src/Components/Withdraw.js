import { useState } from "react"

const Withdraw = ({handleWithdraw, handleOnClickWithdraw, currentUser}) => {
    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [showInsufficient, setShowInsufficient] = useState(false);

    const handleOnChange = (e) => {
        setWithdrawAmount(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(showInsufficient){
            handleOnClickWithdraw();   
        }
        if(currentUser.balance <= 0 || (currentUser.balance < parseInt(withdrawAmount)) ){
            setShowInsufficient(!showInsufficient);
            return
        }
        handleWithdraw(parseInt(withdrawAmount));
        handleOnClickWithdraw();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    return ( 
        <form className="modal" onSubmit={handleOnSubmit} onClick={handleOnClickWithdraw}>
            { !showInsufficient && <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="withdrawAmount">Withdraw Amount </label>
                <input type="number" id="withdrawAmount" min="1" required onChange={handleOnChange}/>
                <br/>
                <div className="modalSubmitBtn">
                    <button className="generalBtn">Submit</button>
                </div>
            </div>}
            { showInsufficient && <div className="modalWindow" onClick={stopBubbling}>
                <label className="insufficientFunds" htmlFor="withdrawAmount">You have insufficient funds.</label>
                <div className="modalSubmitBtn">
                    <button className="generalBtn">Okay</button>
                </div>
            </div>}
        </form>
    );
}
 
export default Withdraw;