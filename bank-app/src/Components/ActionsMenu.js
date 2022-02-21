import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import { useState } from "react";
import SendMoney from "./SendMoney";
import ApplyExpense from "./ApplyExpense";

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
            {/* <div className="MenuBtn" onClick={handleOnClickDeposit}>Deposit</div> */}
            <div className="MenuBtn" onClick={handleOnClickDeposit}><i class="fas fa-piggy-bank"></i><br/>Deposit</div>
            {showDeposit && <Deposit handleDeposit={handleDeposit} handleOnClickDeposit={handleOnClickDeposit}/>}

            {/* <div className="MenuBtn" onClick={handleOnClickSendMoney}>Send Money</div> */}
            <div className="MenuBtn" onClick={handleOnClickSendMoney}><i class="fas fa-exchange-alt"></i><br/>Send Money</div>
            {showSendMoney && <SendMoney handleSendMoney={handleSendMoney} handleOnClickSendMoney={handleOnClickSendMoney} users={users} currentUser={currentUser}/>}

            {/* <div className="MenuBtn" onClick={handleOnClickWithdraw}>Withdraw</div> */}
            <div className="MenuBtn" onClick={handleOnClickWithdraw}><i class="fas fa-money-bill-wave"></i><br/>Withdraw</div>
            {showWithdraw && <Withdraw handleWithdraw={handleWithdraw} handleOnClickWithdraw={handleOnClickWithdraw}/>}

            {/* <div className="MenuBtn" onClick={applyExpenses}>Apply Expenses</div> */}
            {/* <div className="MenuBtn" onClick={applyExpenses}><i class="fas fa-cash-register"></i><br/>Apply Expenses</div> */}
            <div className="MenuBtn" onClick={handleOnClickApplyExpense}><i class="fas fa-cash-register"></i><br/>Apply Expenses</div>
            {showApplyExpense && <ApplyExpense applyExpenses={applyExpenses} handleOnClickApplyExpense={handleOnClickApplyExpense}/>}
            
        </div>
    );
}
 
export default ActionsMenu;