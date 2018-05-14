import React from 'react';

import DropdownMenuEditor from "./DropdownMenuEditor";
import DropdownMenuGermanet from "./DropdownMenuGermanet";



export default class GernEditApp extends React.Component {

    state = { };




    render() {

        return (
            <div>
                <p> GernEditApp page linked</p>
                <div className="menu-bar">
                    < DropdownMenuEditor />
                    < DropdownMenuGermanet />
                    <p
                        className="menu-bar__item--dbURL"
                    >database URL: </p>
                </div>
                <p>test paragraph for layout: stay still on dropdown</p>
            </div>

        )
    }


}