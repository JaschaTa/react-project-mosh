import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import Message from "../../Message";

let IdOnStart = 1;
export const categories = ["Groceries", "Utilities", "Entertainment"] as const;

const schema = z.object({
    description: z.string().min(1, { message: "Add a description" }),
    amount: z.number({ invalid_type_error: "Add an amount" }),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category  is required" }),
    }),
});

type FormData = z.infer<typeof schema>;
export type ExpenseItem = FormData & { expenseId: number };

const ExpenseTracker = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const [expense, setExpense] = useState<ExpenseItem[]>([]);

    const onSubmit = (data: FieldValues) => {
        setExpense([
            ...expense,
            {
                description: data.description,
                category: data.category,
                amount: data.amount,
                expenseId: IdOnStart++,
            },
        ]);
    };

    const onDelete = (deleteId: number) => {
        setExpense(expense.filter((expense) => expense.expenseId !== deleteId));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        {...register("description")}
                        id="description"
                        type="text"
                        className="form-control"
                    />
                </div>
                {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input
                        {...register("amount", { valueAsNumber: true })}
                        type="number"
                        id="amount"
                        className="form-control"
                    />
                </div>
                {errors.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
                <div>
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        className="form-select mb-3"
                        aria-label="Select a category"
                        defaultValue="Select a category"
                        {...register("category")}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                {errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
            <p />
            <br></br>
            <ExpenseTable expenses={expense} onDelete={onDelete} />
        </>
    );
};

export default ExpenseTracker;
