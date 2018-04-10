import React from 'react';

import AddOption from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js'


export default class SgtTodoApp extends React.Component {
    // we use the constructor to manage the default state and bindings.
    // we pass props to be able to use it in the constructor, but mostly because the react docs recommend it (future compatibility?)
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteSingle = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePickRandom = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const o = this.state.options;
        this.setState(() => ({
            selectedOption: o[random]
        }));
    };

    handleAddOption = (option) => {

        //validation - check for empty string, or if already exists
        if (!option) {
            return 'Nothing? I do not train nothing soldiers. Enter an actual thing';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Do one thing once soldier! Already on the list'
        }

        // doesn't explicitly return anything if it works, just updates the state
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    componentDidMount(){
        try {
            console.log('fetching data');
            const json = localStorage.getItem('db-options');
            const optionsArray = JSON.parse(json);

            if (optionsArray) {
                this.setState(() => ({ options: optionsArray }));
            }
            localStorage.clear();

        } catch (e) { //JSON data not valid error
            //do nothing. default empty array value
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('db-options', json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        const subtitle = `Do it. That's an order`;

        return (
            <div>
                <Header subtitle={subtitle}/>

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePickRandom={this.handlePickRandom}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteSingle={this.handleDeleteSingle}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>

                <OptionModal
                    selectedOption={ this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// };