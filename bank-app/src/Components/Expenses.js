import { useEffect, useState } from "react";
import ConfirmationMessage from "./ConfirmationMessage";

const Expenses = ({currentUser, expenseTotal, AddExpense, deleteExpense, editExpense}) => {
    let userExpenses = currentUser.expenses;
    const [showAddExpense, setShowAddExpense] = useState(false)
    const [expenseAmount, setExpenseAmount] = useState("")
    const [expenseName, setExpenseName] = useState("")
    const [toEdit, setToEdit] = useState(false);
    const [toDelete, setToDelete] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        AddExpense({expenseName, amount: expenseAmount, expenseID: Math.random()})
        setShowAddExpense(!showAddExpense)
    }

    const handleOnClickAddExpense = () => {
        setShowAddExpense(!showAddExpense)        
    }

    const handleOnChangeExpenseAmount = (e) => {
        setExpenseAmount(e.target.value)
    }

    const handleOnChangeExpenseName = (e) => {
        setExpenseName(e.target.value)
    }

    const stopBubbling = (e) => {
        e.stopPropagation()
    }

    const handleDelete = () => {
        deleteExpense(toDelete.expenseID);
    }

    const toEditToggle = (e) => {
        console.log("editToggled: ", toEdit);
        setToEdit(e);
    }

    const toDeleteToggle = (e) => {
        setToDelete(e);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        console.log("edit: ", toEdit);
        let newExpense = {expenseName: expenseName, amount: expenseAmount, expenseID: toEdit.expenseID}
        editExpense(newExpense);
        setToEdit(false);
        setShowAddExpense(!showAddExpense);
    }

    useEffect(()=>{
        if(showAddExpense == false){
            setToEdit(false);
            setExpenseAmount("");
            setExpenseName("");
        }

    }, [showAddExpense])

    useEffect(() => {
        if(typeof toEdit == 'object'){
            setExpenseAmount(toEdit.amount);
            console.log("toEdit.amount: ", toEdit.amount)
            setExpenseName(toEdit.expenseName);
        }
    }, [toEdit])

    const handleOnClickDeleteExpense = () => {
        setShowConfirm(!showConfirm)
    }

    return (  
        <div className="expenses">
            {showConfirm && <ConfirmationMessage handleOnClickToggle={handleOnClickDeleteExpense} applyFunction={handleDelete} msg={`Are you sure you want to delete "${toDelete.expenseName}" expense amounting to $${toDelete.amount}?`}/>}
            <table className="user-list">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Cost</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userExpenses.map(userExpense => (
                        <tr key={userExpense.expenseID}>
                            <td>{userExpense.expenseName}</td>
                            <td>{`$ ${userExpense.amount}`}</td>
                            <td className="delete"><i className="fas fa-trash-alt" onClick={()=>{handleOnClickDeleteExpense(); toDeleteToggle(userExpense)}}></i></td>
                            <td className="edit"><i className="fas fa-edit" onClick={()=>{handleOnClickAddExpense(); toEditToggle(userExpense)}}></i></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{`$ ${expenseTotal}`}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <div className="addExpense">
                <button onClick={handleOnClickAddExpense} >Add Expense</button>
            </div>
            {showAddExpense && 
            (<form className="modal" onSubmit={toEdit? handleEdit: handleOnSubmit} onClick={handleOnClickAddExpense}>
            <div className="modalWindow" onClick={stopBubbling}>
                <div className="modalInputToCenter">
                    <label htmlFor="expenseName">Expense Name </label>
                    <input type="text" id="expenseName" required onChange={handleOnChangeExpenseName} value={expenseName}/>
                </div>
                <br />
                <div className="modalInputToCenter">
                    <label htmlFor="expenseAmount">Expense Amount </label>
                    <input type="number" id="expenseAmount" min="1" required onChange={handleOnChangeExpenseAmount} value={expenseAmount}/>
                </div>
                <br />
                <div className="modalSubmitBtn">
                    <button className="generalBtn">Submit</button>
                </div>
            </div>
            </form>)
        }
        </div>
    );
}
 
export default Expenses;