import React from 'react';
import Option from './Option.js';

//when options empty, render a little <p>
const Options = (props) => (
    <div className="options">
        <div className="widget-header">
            <h3 className="widget-header__title">Tasks to be done</h3>
            <button
                className= "reg-button reg-button--link"
                onClick={props.handleDeleteOptions}>Remove All</button>
        </div>

        {props.options.length === 0 && (<p className="widget__message"> Tasks don't do themselves</p>)}
        {
            props.options.map((option, index) => (
                <Option
                    key = {option}
                    optionText = {option}
                    count={index + 1}
                    handleDeleteSingle={props.handleDeleteSingle}
                />
            ))
        }

    </div>
);

export default Options;