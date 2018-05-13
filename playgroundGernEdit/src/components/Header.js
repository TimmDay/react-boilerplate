import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => (
    <header>
        <h1> The Title! </h1>


        <button><NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink></button>

        <p>database URL: {props.databaseUrl ? props.databaseUrl : 'unknown'} </p>
        <p>user: {props.userName ? props.userName : 'unknown'}</p>

        <ul>
            <li><NavLink to="/create" activeClassName="is-active" exact={false}>add expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active" exact={false}>help</NavLink></li>
            <NavLink to="/dogs" activeClassName="is-active" exact={false}>broken link</NavLink>
        </ul>

        <input
            type="text"
            placeholder="search word or ID"
            autoFocus
        />

    </header>
);

export default Header;