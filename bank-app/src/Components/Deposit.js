import { useState } from "react";

const Deposit = ({handleDeposit, handleOnClickDeposit}) => {
    const [depositAmount, setDepositAmount] = useState(0)

    const handleOnChange = (e) => {
        setDepositAmount(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleDeposit(parseInt(depositAmount));
        handleOnClickDeposit();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    return ( 
        <form className="modal" onSubmit={handleOnSubmit} onClick={handleOnClickDeposit}>
            <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="depositAmount">Deposit Amount </label>
                <input type="number" id="depositAmount" required onChange={handleOnChange} min="1"/>
                <div className="modalSubmitBtn">
                    <button className="generalBtn">Submit</button>
                </div>
            </div>
        </form>
    );
}
 
export default Deposit;