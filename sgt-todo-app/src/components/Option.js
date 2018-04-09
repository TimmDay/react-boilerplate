import React from 'react';

// onClick has func as arg, to call higher up fnc with an arg
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteSingle(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;

