import React from 'react';

import DropdownMenuEditor from "./DropdownMenuEditor";
import DropdownMenuGermanet from "./DropdownMenuGermanet";



export default class GernEditApp extends React.Component {

    state = { };




    render() {

        return (
            <div>
                <p> GernEditApp page linked</p>

                < DropdownMenuEditor />
                < DropdownMenuGermanet />


            </div>

        )
    }


}