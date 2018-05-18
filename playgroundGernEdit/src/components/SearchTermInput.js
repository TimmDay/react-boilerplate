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

    handleInputClear = (e) => {
        e.preventDefault();
        e.target.value = '';
    };

    onSubmit = (e, {currentSearchTerm, isQueryCaseSensitive}=this.state) => {
        e.preventDefault();

        const userEntry = document.getElementById('primary-search-input');
        // todo on enter also, remove input contents and replace with placeholder - currently no work
        // document.getElementById('primary-search-input').value = '';
        userEntry.placeholder = userEntry.value;


        //validation: no digits allowed, or empty string
        if (userEntry.value === '' || currentSearchTerm === '' || !!currentSearchTerm.match(/\d/)) {
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
                {/*{console.log(this.state.isQueryCaseSensitive)}*/}
                {/*{console.log(this.state.currentSearchTerm)}*/}

                { this.state.error && <p>{this.state.error}</p> }
                <input
                    className="search-term-form__input"
                    id="primary-search-input"
                    type="text"
                    placeholder="Word or ID here"
                    value={this.state.currentSearchTerm}
                    onChange={this.handleOnSearchTermChange}
                    autoFocus
                    onClick={(e) => this.handleInputClear(e)}
                    // value={this.state.userName}
                    // onChange={this.onUserNameChange}
                />

                <div className="search-term-form__case-check">
                    <input
                        type="checkbox"
                        onChange={this.handleToggleCheckIgnoreCase}
                    />
                    <label className="search-term-form__case-check-label">ignore case</label>

                    <button
                        className="search-term-form__submit"
                    > Find
                    </button>
                </div>

            </form>
        );
    }

}


export default connect()(SearchTermInput);