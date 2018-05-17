import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';

import GernEditApp from "./components/GernEditApp";
import DropdownMenuEditor from './components/DropdownMenuEditor';
import {executeSearchTermInput} from "./actions/searchInput";

const store = configureStore();



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses);
// });


// TEST SET UP STATE dispatch calls
store.dispatch(executeSearchTermInput({currentSearchTerm: 'Baum', isQueryCaseSensitive: true}));
store.dispatch(executeSearchTermInput({currentSearchTerm: 'brauchen', isQueryCaseSensitive: false}));
store.dispatch(executeSearchTermInput({currentSearchTerm: 'Äpfel', isQueryCaseSensitive: false}));

console.log(store.getState());


// Provider comp requires a prop that references our store that we have set up
const jsx = (
    <Provider store={store}>
        {/*< AppRouter />*/}
        <GernEditApp/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));

// Provider provides the store to all of the components that use the application