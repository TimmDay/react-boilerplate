import React from 'react';
import { connect } from 'react-redux';
import { executeSearchTermInput } from '../actions/searchInput';


class SearchTermInput extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            currentSearchTerm: '',
            isQueryCaseSensitive: true,
            error:''
        }
    }

    handleOnSearchTermChange = (e) => {
        const st = e.target.value;
        this.setState(() => ({ currentSearchTerm: st }))
    };

    handleToggleCheckIgnoreCase = () => {
        this.setState((prevState) => ({ isQueryCaseSensitive: !prevState.isQueryCaseSensitive}))
    };

    onSubmit = (e, {currentSearchTerm, isQueryCaseSensitive}=this.state) => {
        e.preventDefault();
        // todo if successful, remove placeholder contents from input

        //validation: no digits allowed, or empty string
        if (currentSearchTerm === '' || !!currentSearchTerm.match(/\d/)) {
            this.setState(() => ({ error: 'please enter a valid word or ID'}));
        } else {

            this.props.dispatch(executeSearchTermInput({currentSearchTerm, isQueryCaseSensitive}));

            this.setState(() => ({ error: '' }));
        }

    };

    //TODO remove tests below
    render() {
        return (
            <form
                className="search-term-form"
                onSubmit={this.onSubmit}
            >
                {console.log(this.state.isQueryCaseSensitive)}
                {console.log(this.state.currentSearchTerm)}

                { this.state.error && <p>{this.state.error}</p> }
                <input
                    type="text"
                    placeholder="Word or ID here"
                    value={this.state.currentSearchTerm}
                    onChange={this.handleOnSearchTermChange}
                    autoFocus
                    // value={this.state.userName}
                    // onChange={this.onUserNameChange}
                />

                <div>
                    <input
                        type="checkbox"
                        onChange={this.handleToggleCheckIgnoreCase}
                    />
                    <label>ignore case</label>

                    <button
                        className=""
                    > Find
                    </button>
                </div>

            </form>
        );
    }

}


export default connect()(SearchTermInput);