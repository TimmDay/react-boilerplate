import React from 'react';
import ModalAbout from './ModalAbout';

export default class DropdownMenuEditor extends React.Component {

    state = {
        showMenu: false,
        isAboutModalOpen: false
    };

    // by making an arrow func, we dont seem to need the constructor binding
    showMenu = (e) => {
        e.preventDefault();
        // The second (optional) parameter to setState is a callback function, not a string.
        // You can pass a function that will be executed once the operation is completed.
        this.setState(
            {
                showMenu: true
            },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
    };

    closeMenu = () => {
        this.setState(
            { showMenu: false },
            () => {
                document.removeEventListener('click', this.closeMenu);
            }
        )
    };

    handleToggleAboutModal = () => {
        console.log('handleToggleAbout');
        this.setState((prevState) => ({
            isAboutModalOpen: !prevState.isAboutModalOpen
        }));
    };


    render() {
        return (
            <div>
                <div
                    className="menu-bar__item"
                    onClick={this.showMenu}
                >Editor
                </div>

                {this.state.showMenu
                    ? (
                    <ul className="dd-menu">

                        <li
                            className="big-butto dd__item"
                            onClick={this.handleToggleAboutModal}
                        >About GernEdit</li>

                        <li className="big-button dd__item">View History
                        </li>

                        <li className="big-button dd__item" >Save and Close</li>

                    </ul>)
                    : (null)
                }


                <ModalAbout
                    isAboutModalOpen = {this.state.isAboutModalOpen}
                    handleToggleAboutModal = {this.handleToggleAboutModal}
                />

            </div>
        );
    }
}