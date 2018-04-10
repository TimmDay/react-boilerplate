import React from 'react';
import Modal from 'react-modal';

// !! takes the falsey of an empty string or undefined, makes it true, then flips it back to a boolean false
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Order Given:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={props.handleClearSelectedOption}
        > OK </button>

    </Modal>
);

export default OptionModal;