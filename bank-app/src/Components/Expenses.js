import { useState } from "react";

const Expenses = ({currentUser, expenseTotal, AddExpense, deleteExpense}) => {
    let userExpenses = currentUser.expenses;
    const [showAddExpense, setShowAddExpense] = useState(false)
    const [expenseAmount, setExpenseAmount] = useState(false)
    const [expenseName, setExpenseName] = useState(false)

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

    const handleDelete = (e) => {
        deleteExpense(e);
    }

    return (  
        <div className="expenses">
            <table className="user-list">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userExpenses.map(userExpense => (
                        <tr key={userExpense.expenseID}>
                            <td>{userExpense.expenseName}</td>
                            <td>{`$ ${userExpense.amount}`}</td>
                            <td className="delete"><i class="fas fa-trash-alt" onClick={()=>{handleDelete(userExpense.expenseID)}}></i></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{`$ ${expenseTotal}`}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <div className="addExpense">
                <button onClick={handleOnClickAddExpense}>Add Expense</button>
            </div>
            {showAddExpense && 
            (<form className="modal" onSubmit={handleOnSubmit} onClick={handleOnClickAddExpense}>
            <div className="modalWindow" onClick={stopBubbling}>
                <div className="modalInputToCenter">
                    <label htmlFor="expenseName">Expense Name </label>
                    <input type="text" id="expenseName" required onChange={handleOnChangeExpenseName}/>
                </div>
                <br />
                <div className="modalInputToCenter">
                    <label htmlFor="expenseAmount">Expense Amount </label>
                    <input type="number" id="expenseAmount" min="1" required onChange={handleOnChangeExpenseAmount}/>
                </div>
                <br />
                <div className="modalSubmitBtn">
                    <button>Submit</button>
                </div>
            </div>
            </form>)
        }
        </div>
    );
}
 
export default Expenses;