import React from 'react';
import Modal from 'react-modal';

// !! takes the falsey of an empty string or undefined, makes it true, then flips it back to a boolean false
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Your next order is:</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="reg-button"
            onClick={props.handleClearSelectedOption}
        > Yes Sergeant </button>

    </Modal>
);

export default OptionModal;