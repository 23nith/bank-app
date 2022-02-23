const ConfirmationMessage = ({handleOnClickToggle, applyFunction, msg}) => {

    const handleOnClickYes = () => {
        applyFunction();
        handleOnClickToggle();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    return ( 
        <form className="modal" onClick={handleOnClickToggle}>
            <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="ApplyExpenseAmount">{msg}</label>
                <br/>
                <div className="yesOrNo">
                    <button onClick={handleOnClickYes} className="generalBtn">Yes</button>
                    <button onClick={handleOnClickToggle} className="generalBtn">No</button>
                </div>
            </div>
        </form>
    );
}
 
export default ConfirmationMessage;