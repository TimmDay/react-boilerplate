import { createStore, combineReducers } from 'redux';
// import reducer(s)

export default () => {

    const store = createStore(
        combineReducers({}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

// STORE creation
// tracks the state (the thing returned when an action is processed by the reducer
// the weird window. line is to enable redux devtools in chrome browser


