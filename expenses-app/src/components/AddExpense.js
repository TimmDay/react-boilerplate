import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';

const AddExpense = () => (
    <div>
        <h1>add expense</h1>

        <ExpenseForm/>

        <Link to="/">back</Link>
    </div>
);

export default AddExpense;