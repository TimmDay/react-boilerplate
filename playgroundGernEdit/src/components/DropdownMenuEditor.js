import React from 'react';
import ModalAbout from './ModalAbout';

export default class DropdownMenuEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            isAboutModalOpen: false
        };



        // this.showMenu = this.showMenu.bind(this);
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
                <button
                    onClick={this.showMenu}
                >Editor
                </button>

                {this.state.showMenu
                    ? (
                    <div className="dropdown">

                        <button
                            className="big-button"
                            onClick={this.handleToggleAboutModal}
                        >About GernEdit</button>

                        <button
                            className="big-button"
                        >View History
                        </button>

                        <button>Save and Close</button>

                    </div>)
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