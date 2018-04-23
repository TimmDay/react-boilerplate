import React from 'react'; //because we are using JSX
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import Portfolio from '../components/Portfolio';
import Item from '../components/Item';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/portfolio/:id" component={Item} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;


{/*<Route path="/" component={ExpenseDashboardPage} exact={true}/>*/}
{/*<Route path="/create" component={AddExpense} />*/}
{/*<Route path="/edit/:id" component={EditExpense} />*/}
{/*<Route path="/help" component={HelpPage} />*/}


// browserRouter can only have one child

// exact treu means that url matches only for exact match.
// Otherwise the / would match every URL so the content would be the same each time

// using a component inside a ROute has some special props with it

// the : the ROute path means to dynamically match whatever comes after this point
// exact true means do not match if there is stuff after the given path