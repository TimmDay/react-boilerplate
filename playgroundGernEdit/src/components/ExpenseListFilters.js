import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate} from "../actions/filters";

const ExpenseListFilters = (props) => (
    <div>
        <input type="text"
           value = {props.filters.text}
           onChange={(e) =>{
                //use dispatch to update redux store according to keystrokes
               props.dispatch(setTextFilter(e.target.value));
               console.log(e.target.value);
           }}
        />

        <select
            value = {props.filters.sortBy}
            onChange={(e) => {
                e.target.value === 'date' && props.dispatch(sortByDate());
                e.target.value === 'amount' && props.dispatch(sortByAmount());
            }}
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>

    </div>
);


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};


export default connect(mapStateToProps)(ExpenseListFilters);