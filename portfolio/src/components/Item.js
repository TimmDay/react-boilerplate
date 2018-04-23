import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => (
    <div>
        <h2>A thing I've done</h2>
        <p>this is thing number: {props.match.params.id}</p>
        <Link to="/portfolio">back</Link>
    </div>
);

export default Item;