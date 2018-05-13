import React from 'react';
import { Link } from 'react-router-dom';

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            <p>editing expense {props.match.params.id} </p>
            <Link to="/">back</Link>
        </div>
    )
};

export default EditExpense;