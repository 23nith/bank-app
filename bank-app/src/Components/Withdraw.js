import { useState } from "react"

const Withdraw = ({handleWithdraw, handleOnClickWithdraw}) => {
    const [withdrawAmount, setWithdrawAmount] = useState(0)

    const handleOnChange = (e) => {
        setWithdrawAmount(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleWithdraw(parseInt(withdrawAmount));
        handleOnClickWithdraw();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    return ( 
        <form className="modal" onSubmit={handleOnSubmit} onClick={handleOnClickWithdraw}>
            <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="withdrawAmount">Withdraw Amount </label>
                <input type="number" id="withdrawAmount" min="1" onChange={handleOnChange}/>
                <br/>
                <div className="modalSubmitBtn">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}
 
export default Withdraw;