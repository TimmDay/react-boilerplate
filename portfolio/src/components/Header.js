import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Portfolio </h1>

        <NavLink to="/" activeClassName="is-active" exact={true}> home </NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}> portfolio </NavLink>
        <NavLink to="/contact" activeClassName="is-active" exact={false}> contact </NavLink>

    </header>
);

export default Header;
