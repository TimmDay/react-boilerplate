import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import {setTextFilter, sortByAmount} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import GernEditApp from "./components/GernEditApp";
import DropdownMenuEditor from './components/DropdownMenuEditor';

const store = configureStore();



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({description: 'bananas', amount: 200}));
store.dispatch(addExpense({description: 'water bill', amount: 4000, createdAt: 2525}));
store.dispatch(addExpense({description: 'rent', amount: 80000}));
store.dispatch(addExpense({description: 'gas bill', amount: 5000, createdAt: 3000}));

store.dispatch(setTextFilter(''));


console.log(store.getState());

// Provider comp requires a prop that references our store that we have set up
const jsx = (

    <Provider store={store}>
        {/*< AppRouter />*/}
        <GernEditApp/>
        {/*<DropdownMenuEditor />*/}
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
