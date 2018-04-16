import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    };
    handleAddOption = (event) => {
        event.preventDefault();
        const item = event.target.elements.option.value.trim(); //option is the name
        const error = this.props.handleAddOption(item); // only get errors explit ret

        this.setState(() => ({ error: error }));

        // if no error, clear the input
        if (!error) {
            event.target.elements.option.value = '';
        }
    };


    //undefined is falsy, so only displays when error actually there
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form
                    className="add-option"
                    onSubmit={this.handleAddOption}
                >
                    <input className="add-option__input" type="text" name="option"/>
                    <button
                        className="reg-button"
                    >Add Task</button>
                </form>
            </div>
        );
    }
}