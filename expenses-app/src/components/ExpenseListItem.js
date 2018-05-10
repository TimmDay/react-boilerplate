import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';

const ExpenseListItem = ( {description, amount, createdAt, id, dispatch}) => (
    <div>
        {description && (<h3> {description} </h3>)}
        {amount && (<p> {amount} - {createdAt} </p>)}
        <button
            onClick = {() => {
                dispatch(removeExpense({id}))
            }}

        >Remove</button>
    </div>
);

//allows us to change the store
// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// };
// dont need above. this component doesn't need to change state

// export default ExpenseListItem;
export default connect()(ExpenseListItem);

// a connect() by itself just gives access to the dispatch