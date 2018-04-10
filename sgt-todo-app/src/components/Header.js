import React from 'react';

const Header = (props) => (
    <div className="container">
        <header>

            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </header>
    </div>

);


Header.defaultProps = {
    title: `SGT Tüdo`
};

export default Header;