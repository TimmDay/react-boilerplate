import React from 'react';
import Modal from 'react-modal';

// import germanetImage from '../../public/images/favicon.ico';

// todo sort out rel image url thing


const ModalAbout = (props) => (
    <Modal
        isOpen= {props.isAboutModalOpen}
        contentLabel="Selected Option"
        onRequestClose={props.handleToggleAboutModal}
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h1 className="modal__title">GernEdit</h1>
        <h5 className="modal__subtitle">The GermaNet Editing Tool</h5>

        {/*todo add an option 'you are not logged in' messgae?*/}

        <img
            className="modal__img"
            alt="germanet logo"
            src="http://localhost:63342/playgroundGernEdit/public/images/GermaNetLogo_150x150.png"
            width="100"
        />
        <p>
            The GernEdit interface allows lexicographers to maintain and extend the GermaNet database.
        </p>
        <p>
            Germanet is a lexical-semantic net that relates German nouns, verbs and adjectives
            semantically.
            By grouping lexical units that express the same concept into a <strong>synset</strong>,
            we can then also define the semantic relations between various synsets.
        </p>


        <table className="modal__table">
            <tbody>

            <tr>
                <td className="modal__table--cell-title">Version:</td>
                <td className="modal__table--cell-info">10.0?</td>
            </tr>

            <tr>
                <td className="modal__table--cell-title">Vendor: </td>
                <td className="modal__table--cell-info">Computational Linguistics, University of Tübingen</td>
            </tr>

            <tr>
                <td className="modal__table--cell-title">Development Lead:</td>
                <td className="modal__table--cell-info">Marie Hinrichs</td>
            </tr>

            <tr>
                <td className="modal__table--cell-title">Frontend Engineer:</td>
                <td className="modal__table--cell-info">Tim Day</td>
            </tr>

            <tr>
                <td className="modal__table--cell-title">Backend Engineer:</td>
                <td className="modal__table--cell-info">Ben Campbell</td>
            </tr>

            <tr>
                <td className="modal__table--cell-title">Homepage:</td>
                <td className="modal__table--cell-info">
                    <a
                        href="http://www.sfs.uni-tuebingen.de/GermaNet/"
                        target="_blank"
                    > http://www.sfs.uni-tuebingen.de/GermaNet/</a>
                </td>
            </tr>

            </tbody>
        </table>

        <button
            className="modal__btn reg-button"
            onClick={props.handleToggleAboutModal}
        > close </button>

    </Modal>
);

export default ModalAbout;
