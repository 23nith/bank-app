import { useState } from "react";

const SendMoney = ({users, handleSendMoney, handleOnClickSendMoney, currentUser}) => {
    const [sendAmount, setSendAmount] = useState(0)

    const handleOnChange = (e) => {
        setSendAmount(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let selectedValue = document.querySelector("select").value;
        console.log("selectedValue: ", selectedValue);
        handleSendMoney(parseInt(sendAmount), selectedValue)
        handleOnClickSendMoney();
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }

    return (  
        <form className="modal" onSubmit={handleOnSubmit} onClick={handleOnClickSendMoney}>
            <div className="modalWindow" onClick={stopBubbling}>
                <label htmlFor="sendAmount">Send Amount </label>
                <input required min="1" type="number" id="sendAmount" onChange={handleOnChange}/>
                <br />
                <div className="sendMoneyToCenter">
                    <label htmlFor="transferToUser">Send To: </label>
                    <select name="transferToUser" id="transferToUser">
                        {users.filter(user => user.id !== currentUser.id).map(user=>(
                            <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>
                        ))}
                    </select>
                </div>
                <br/>
                <div className="modalSubmitBtn">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}
 
export default SendMoney;