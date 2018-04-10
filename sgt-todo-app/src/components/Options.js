import React from 'react';
import Option from './Option.js';

//when options empty, render a little <p>
const Options = (props) => (
    <div className="options">
        <button
            className= "reg-button reg-button--link"
            onClick={props.handleDeleteOptions}>Remove All</button>

        {props.options.length === 0 && (<p> Tasks don't do themselves</p>)}
        {
            props.options.map((o) => (
                <Option
                    key={o}
                    optionText={o}
                    handleDeleteSingle={props.handleDeleteSingle}
                />
            ))
        }
    </div>
);

export default Options;