import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addLogInDetails } from '../actions/login';

class ModalLogInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            databaseURL: '',
            isLogInModalOpen: false,
            error: ''
        };
    }


    handleToggleLogInModal = () => {
        this.setState((prevState)=>{
            return { isLogInModalOpen: !prevState.isLogInModalOpen}
        });
    };


    onUserNameChange = (e) => {
        const user = e.target.value;
        console.log(user); //todo

        this.setState(() => ({ userName: user }))
    };

    //todo this cannot be secure...
    onPasswordChange = (e) => {
        const pword = e.target.value;

        // todo some encrytion or something?
        this.setState(() => ({ password: pword }))
    };
    onDbUrlChange = (e) => {
        const dbUrl = e.target.value;

        //todo do some url validation using that validator library
        this.setState(() => ({databaseURL: dbUrl}));
        // console.log(dbUrl); //todo one behind below. setstate a little slower i guess
        // console.log(this.state.databaseURL); //todo
    };


    onSubmit = (e, {userName, password, databaseURL}=this.state) => {
        e.preventDefault();

        if (!userName || !password || !databaseURL) {
            this.setState(() => ({error: 'please check your details'}))

        } else {
            //dispatch to store
            this.props.dispatch(addLogInDetails({userName, password, databaseURL}));
            this.setState(() => ({ isLogInModalOpen: false, error: '' }))
        }

    };

    render() {
        return (
            <div>

                <button
                    className="menu-bar__log-in-btn"
                    onClick={this.handleToggleLogInModal}
                >log in</button>

                <Modal
                    isOpen= {this.state.isLogInModalOpen}
                    contentLabel="Selected Option"
                    onRequestClose={this.handleToggleLogInModal}
                    closeTimeoutMS={200}
                    className="modal"
                    ariaHideApp={false}
                >

                    {this.state.error && <p className="login-error">{this.state.error}</p>}
                    <form
                        className="login-form"
                        onSubmit={this.onSubmit}
                    >
                        <div
                            className="login-form__item"
                        >
                            <label>User Name: </label>
                            <input
                                type="text"
                                placeholder="user name"
                                autoFocus
                                value={this.state.userName}
                                onChange={this.onUserNameChange}

                            />
                        </div>

                        <div
                            className="login-form__item"
                        >
                            <label>password: </label>
                            <input
                                type="text"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onPasswordChange}
                            />
                        </div>


                        <div
                            className="login-form__item"
                        >
                            <label>database URL: </label>
                            <input
                                type="text"
                                placeholder="database URL"
                                value={this.state.databaseURL}
                                onChange={this.onDbUrlChange}
                            />
                        </div>

                        <button
                            className="login-form__btn"
                        >connect
                        </button>
                    </form>

                </Modal>

            </div>

        );
    }
};

export default connect()(ModalLogInForm);