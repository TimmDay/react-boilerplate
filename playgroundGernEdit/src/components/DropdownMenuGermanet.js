import React from 'react';
import ModalGermanetStatistics from './ModalGermanetStatistics';

export default class DropdownMenuGermanet extends React.Component {

    state = {
        showMenu: false,
        isStatsModalOpen: false
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
            <div
            className="dd-germanet">
                <div
                    className="menu-bar__item "
                    onClick={this.showMenu}
                >GermaNet
                </div>

                {this.state.showMenu
                    ? (
                        <ul className="dd-menu">

                            <li
                                className="big-button dd__item"
                            >List all Lexical Units</li>

                            <li
                                className="big-button dd__item"
                            >List all Synsets
                            </li>

                            <li
                                className="big-button dd__item"
                            >Extract all Verbs
                            </li>

                            <li
                                className="big-button dd__item"
                            >Extract Verb Valency List
                            </li>

                            <li
                                className="big-button dd__item"
                            >Extract Synonymy List (XML)
                            </li>

                            {/*// a faint line*/}

                            <li
                                className="big-button dd__item"
                            >Check Coverage
                            </li>

                            <li
                                className="big-button dd__item"
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