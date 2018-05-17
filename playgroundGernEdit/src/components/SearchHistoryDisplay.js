import React from 'react';
import { connect } from 'react-redux';

// need to pull search history info from the store to display it
// need to be able to re-execute previous searches if item is clicked (but using current case flag)
// if previous search re-done, the search input in searchinput component displays the re-done search as placeholder text

// todo set up dispatch for when an item button is clicked, with the btn text as the currentSearchTerm
// and the isQueryCaseSensitive from whatever the store has
//which means I need to change searchInput functionality

class SearchHistoryDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p> search history display below</p>

                {this.props.history.map((item) => (
                    <button
                        key = {item}
                        className="search-history__btn"
                    >{item}</button>
                ))}

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        history: state.searchInputReducer.searchHistory
    }
};

export default connect(mapStateToProps)(SearchHistoryDisplay);

// display store search history