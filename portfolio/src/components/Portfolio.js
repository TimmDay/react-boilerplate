import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h2>My Work</h2>
        <p>Check out the following things I've done</p>

        <Link to="/portfolio/1">item 1</Link>
        <Link to="/portfolio/2">item 2</Link>

    </div>
);

export default Portfolio;