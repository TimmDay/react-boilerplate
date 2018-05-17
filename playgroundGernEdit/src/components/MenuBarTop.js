import React from 'react';
import { connect } from 'react-redux';

import DropdownMenuEditor from './DropdownMenuEditor';
import DropdownMenuGermanet from './DropdownMenuGermanet';
import LogInModalForm from './LogInModalForm';


// only display the connected: dbURL if it is saved in the store
// need access to store as props

//todo add extra prop to store 'isDbConnected' and only render that <p> if that is also true

class MenuBarTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="menu-bar">

                    < DropdownMenuEditor/>
                    < DropdownMenuGermanet/>
                    {this.props.databaseConnection &&
                        <p className="menu-bar__item--dbURL">connected to: {this.props.databaseConnection}</p> }
                    < LogInModalForm/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        databaseConnection: state.loginReducer.databaseConnection
    }
};

export default connect(mapStateToProps)(MenuBarTop);