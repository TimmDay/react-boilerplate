import React from 'react';

// onClick has func as arg, to call higher up fnc with an arg
const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className="reg-button reg-button--link"
            onClick={(e) => {
                props.handleDeleteSingle(props.optionText)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;

