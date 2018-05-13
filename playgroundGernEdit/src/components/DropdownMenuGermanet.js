import React from 'react';
import ModalGermanetStatistics from './ModalGermanetStatistics';

export default class DropdownMenuGermanet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            isStatsModalOpen: false
        };
    };

    showMenu = (e) => {
        e.preventDefault();
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

    handleToggleGNStatsModal = () => {
        console.log('handleToggle germanet stats modal - ddmenu gnet'); //todo
        this.setState((prevState) => ({
            isStatsModalOpen: !prevState.isStatsModalOpen
        }));
    };


    render() {
        return (
            <div>
                <button
                    onClick={this.showMenu}
                >GermaNet
                </button>

                {this.state.showMenu
                    ? (
                        <ul className="dropdown">

                            <li
                                className="big-button"
                            >List all Lexical Units</li>

                            <li
                                className="big-button"
                            >List all Synsets
                            </li>

                            <li
                                className="big-button"
                            >Extract all Verbs
                            </li>

                            <li
                                className="big-button"
                            >Extract Verb Valency List
                            </li>

                            <li
                                className="big-button"
                            >Extract Synonymy List (XML)
                            </li>

                            {/*// a faint line*/}

                            <li
                                className="big-button"
                            >Check Coverage
                            </li>

                            <li
                                className="big-button"
                                onClick={this.handleToggleGNStatsModal}
                            >Germanet Statistics
                            </li>

                        </ul>)
                    : (null)
                }




                <ModalGermanetStatistics
                    isStatsModalOpen = {this.state.isStatsModalOpen}
                    handleToggleGNStatsModal = {this.handleToggleGNStatsModal}
                />

            </div>
        );
    }
}