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
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();



store.dispatch(addExpense({description: 'bananas', amount: 200}));
store.dispatch(addExpense({description: 'water bill', amount: 4000, createdAt: 2525}));
store.dispatch(addExpense({description: 'rent', amount: 80000}));
store.dispatch(addExpense({description: 'gas bill', amount: 5000, createdAt: 3000}));

store.dispatch(setTextFilter(''));

// args: func, time to wait ms
// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
// }, 3000);


// Provider comp requires a prop that references our store that we have set up
const jsx = (

    <Provider store={store}>
        < AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));




// import validator from 'validator';
//
// console.log(validator.isEmail('timmday.info@gmail.com'));
// console.log(validator.isEmail('ahhhhhhhhhhhh!!!!'));


// browser router - create the new router
// route - for nav to new page

// define individual routes with ROute. need some props
// path, the url when it is seen load the component
//   / is the path to the root
// the point of a router is to have multiple pages
// API for BrowserRouter expects child to have length of 1 - so need div

// original http request needs to happen before clientside routing
// tweak dev-server config. send back index.html for all routes
// get 404, server sees that, sees historyApiFallback: true, load bundle, read code, so gets the url and renders component

// switch makes the ruter go through the list, and STOP on a match (nice)

//link between pages, without full page refresh (server comm):
// must override default browser behaviour
// react-router gives us components for client-side rendering

// external link, still use anchor tag. But internally, use Link

//NavLink is for navigation. same as Link but with special extras