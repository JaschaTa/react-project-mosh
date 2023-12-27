import { useState } from "react";
import { ExpenseItem, categories } from "./ExpenseTracker";

interface Props {
    expenses: ExpenseItem[];
    onDelete: (expenseId: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: Props) => {
    const [filter, changeFilter] = useState("");

    const filteredExpenses = filter
        ? expenses.filter((expense) => expense.category === filter)
        : expenses;

    const totalAmount = filteredExpenses.reduce(
        (sum, currentExpense) => sum + currentExpense.amount,
        0
    );

    return (
        <>
            <div>
                <select
                    className="form-select mb-3"
                    aria-label="Filter"
                    value={filter}
                    onChange={(event) => changeFilter(event.target.value)}
                >
                    <option value="">Filter category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Delete Entry</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.expenseId}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>
                                <button
                                    className={"btn btn-outline-danger"}
                                    onClick={() => {
                                        onDelete(expense.expenseId);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}>
                            <b>Total sum:</b>
                        </td>
                        <td>
                            <b>€ {totalAmount.toFixed(2)}</b>
                        </td>
                        <td colSpan={2}></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ExpenseTable;
