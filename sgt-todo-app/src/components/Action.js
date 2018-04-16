import React from 'react';

// only enable if options array is !empty
const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePickRandom}
            disabled={!props.hasOptions}
        >
            orders?
        </button>
    </div>
);

export default Action;
