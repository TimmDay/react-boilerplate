import React from 'react';

// only enable if options array is !empty
const Action = (props) => (
    <div>
        <button
            onClick={props.handlePickRandom}
            disabled={!props.hasOptions}
        >
            Do this one
        </button>
    </div>
);

export default Action;
