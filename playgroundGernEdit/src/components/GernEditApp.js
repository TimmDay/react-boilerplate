import React from 'react';

import MenuBarTop from './MenuBarTop';
import SearchTermInput from './SearchTermInput';
import SearchHistoryDisplay from './SearchHistoryDisplay';



export default class GernEditApp extends React.Component {

    state = { };




    render() {

        return (
            <div>
                <p> GernEditApp page linked</p>

                < MenuBarTop />
                < SearchTermInput />
                < SearchHistoryDisplay />

                <p>layout boundary test paragraph</p>
            </div>

        )
    }


}