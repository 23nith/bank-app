import { useState } from "react";

const ApplyExpense = ({handleOnClickApplyExpense, applyExpenses}) => {

    const handleOnClickYes = () => {
        applyExpenses();
        handleOnClickApplyExpense();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    return ( 
        <form className="modal" onClick={handleOnClickApplyExpense}>
            <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="ApplyExpenseAmount">Are you sure you want to apply all listed expenses?</label>
                <br/>
                <div className="yesOrNo">
                    <button onClick={handleOnClickYes}>Yes</button>
                    <button onClick={handleOnClickApplyExpense}>No</button>
                </div>
            </div>
        </form>
    );
}
 
export default ApplyExpense;