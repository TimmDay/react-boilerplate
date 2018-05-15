import React from 'react';
import Modal from 'react-modal';

export default class ModalLogInForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            isLogInModalOpen: false,
            userName: '',
            password: '',
            databaseURL: '',
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

        console.log(pword); //todo
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


    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.userName || !this.state.password || !this.state.databaseURL) {
            this.setState(() => ({error: 'please check your details'}))
        } else {
            this.setState(() => ({error: ''}));

            //todo dispatch to store
        }
    };

    render() {
        return (
            <div>

                <button
                    onClick={this.handleToggleLogInModal}
                >Click to log in</button>

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
