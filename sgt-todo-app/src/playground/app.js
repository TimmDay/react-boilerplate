import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Action from './components/Action.js';
import AddOption from './components/AddOption.js';
import Option from './components/Option.js';


class IndecisionApp extends React.Component {
    // we use the constructor to manage the default state and bindings.
    // we pass props to be able to use it in the constructor, but mostly because the react docs recommend it (future compatibility?)
    constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickRandom = this.handlePickRandom.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingle = this.handleDeleteSingle.bind(this);

        this.state = {
          options: []
          // options: props.options
        };
    }
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

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteSingle(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePickRandom() {
        const o = this.state.options;
        alert(o[Math.floor(Math.random()* o.length)]);
    }

    handleAddOption(option) {

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
    }

    render(){
        // const title = 'What to do?';
        const subtitle = `Do it. That'ssss an order`;

        return (
            <div>
                <Header subtitle={subtitle}/>
                {/*<Header title={title} subtitle={subtitle}/>*/}
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
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// };




//when options empty, render a little <p>
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>

            {props.options.length === 0 && (<p> Tasks don't do themselves</p>)}
            {
                props.options.map((o) => (
                    <Option
                        key={o}
                        optionText={o}
                        handleDeleteSingle={props.handleDeleteSingle}
                    />
                ))
            }
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));