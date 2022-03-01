import Deposit from "./Actions_Menu/Deposit";
import Withdraw from "./Actions_Menu/Withdraw";
import { useState } from "react";
import SendMoney from "./Actions_Menu/SendMoney";
import ConfirmationMessage from "./ConfirmationMessage";

const ActionsMenu = ({handleDeposit, handleWithdraw, handleSendMoney, users, applyExpenses, currentUser}) => {
    const [showDeposit, setShowDeposit] = useState(false)
    const [showWithdraw, setShowWithdraw] = useState(false)
    const [showSendMoney, setShowSendMoney] = useState(false)
    const [showApplyExpense, setShowApplyExpense] = useState(false)

    const handleOnClickDeposit = () => {
        setShowDeposit(!showDeposit);
    }

    const handleOnClickWithdraw = () => {
        setShowWithdraw(!showWithdraw);
    }

    const handleOnClickSendMoney = () => {
        setShowSendMoney(!showSendMoney);
    }

    const handleOnClickApplyExpense = () => {
        setShowApplyExpense(!showApplyExpense);
    }

    return (  
        <div className="NavMenu">
            <div className="MenuBtn" onClick={handleOnClickDeposit}><i className="fas fa-piggy-bank"></i><br/>Deposit</div>
            {showDeposit && <Deposit handleDeposit={handleDeposit} handleOnClickDeposit={handleOnClickDeposit}/>}

            <div className="MenuBtn" onClick={handleOnClickSendMoney}><i className="fas fa-exchange-alt"></i><br/>Send Money</div>
            {showSendMoney && <SendMoney handleSendMoney={handleSendMoney} handleOnClickSendMoney={handleOnClickSendMoney} users={users} currentUser={currentUser}/>}

            <div className="MenuBtn" onClick={handleOnClickWithdraw}><i className="fas fa-money-bill-wave"></i><br/>Withdraw</div>
            {showWithdraw && <Withdraw handleWithdraw={handleWithdraw} handleOnClickWithdraw={handleOnClickWithdraw} currentUser={currentUser}/>}

            <div className="MenuBtn" onClick={handleOnClickApplyExpense}><i className="fas fa-cash-register"></i><br/>Apply Expenses</div>
            {showApplyExpense && <ConfirmationMessage applyFunction={applyExpenses} handleOnClickToggle={handleOnClickApplyExpense} msg={"Are you sure you want to apply all listed expenses?"}/>}
            
        </div>
    );
}
 
export default ActionsMenu;