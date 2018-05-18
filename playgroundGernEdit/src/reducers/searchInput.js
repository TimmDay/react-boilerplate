// search input reducer
// for SearchTermInput and SearchHistory

const searchReducerDefaultState = {
    currentSearchTerm: '',
    searchHistory: [],
    isQueryCaseSensitive: true
};


// todo after firing, input is clear
// todo input placeholder text is replaced with current search term
const searchInputReducer = (state = searchReducerDefaultState, action) => {

    switch (action.type) {
        case 'SEARCH_FOR_TERM':

            //todo get the json. isSuccess? if not success, do not add to history

            let remadeArr = [];
            if (state.searchHistory.includes(action.currentSearchTerm)) {
                // make new array with the duplicate item removed from old position and moved to front

                remadeArr = [
                    action.currentSearchTerm,
                    ...state.searchHistory.filter(( word ) => {
                        return word !== action.currentSearchTerm;
                    })
                ];

            } else {
                // no duplicate, add new item to start
                remadeArr = [action.currentSearchTerm, ...state.searchHistory];
                //slice array so only 6 terms remain (don't need to go further back than that)
                if (remadeArr.length > 6) remadeArr = remadeArr.slice(0,6);
            }

            const el = document.getElementById('primary-search-input');
            if (el) el.value = '';

            return {
                ...state,
                currentSearchTerm: action.currentSearchTerm,
                isQueryCaseSensitive: action.isQueryCaseSensitive,
                searchHistory: remadeArr
            };

        default :
            return state;
    }
};

export default searchInputReducer;