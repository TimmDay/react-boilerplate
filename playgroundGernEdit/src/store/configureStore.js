import { createStore, combineReducers } from 'redux';

import loginReducer from '../reducers/login';
import searchInputReducer from '../reducers/searchInput';

export default () => {

    const store = createStore(
        // loginReducer,
        combineReducers({loginReducer, searchInputReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
}

// STORE creation
// tracks the state (the thing returned when an action is processed by the reducer
// the weird window. line is to enable redux devtools in chrome browser


