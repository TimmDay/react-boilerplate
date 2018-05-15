import React from 'react';

import DropdownMenuEditor from './DropdownMenuEditor';
import DropdownMenuGermanet from './DropdownMenuGermanet';
import ModalLogInForm from './ModalLogInForm';



export default class MenuBarTop extends React.Component {

    state = {};




    render() {

        return (
            <div>

                <div className="menu-bar">

                    < DropdownMenuEditor />
                    < DropdownMenuGermanet />

                    < ModalLogInForm />

                    <p
                        className="menu-bar__item--dbURL"
                    >database URL: </p>
                </div>

            </div>

        )
    }


}