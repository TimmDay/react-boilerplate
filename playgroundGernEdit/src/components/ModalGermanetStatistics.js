import React from 'react';
import Modal from 'react-modal';

//todo work out styles for text area info dumping ground
//todo  get scroll bar on textarea
//todo make refresh button re-run the db query when clicked

const ModalGermanetStatistics = (props) => (
    <Modal
        isOpen= {props.isStatsModalOpen}
        contentLabel="Selected Option"
        onRequestClose={props.handleToggleGNStatsModal}
        closeTimeoutMS={200}
        className="modal--gn-stats"
        ariaHideApp={false}
    >
        <h1 className="modal__title">Germanet Statistical Information</h1>


        {/*todo reminder of which database you are logged into*/}

        <textarea>
            here are lots of statistics, copy/pastable
            scrollable
            need a scroll bar on the side

        </textarea>


        <button
            className="modal__btn reg-button"
            onClick={console.log('refresh data by re-querying the database. (do we really need this?)')}
        >
            refresh
        </button>


        <button
            className="modal__btn reg-button"
            onClick={props.handleToggleGNStatsModal}
        > close </button>

    </Modal>
);

export default ModalGermanetStatistics;
