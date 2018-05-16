// Login Reducer

const logInReducerDefaultState = {
    username: '',
    password: 'nope',
    databaseConnection: ''
};

const logInReducer = (state = logInReducerDefaultState, action) => {

    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                username: action.userName,
                password: action.password,
                databaseConnection: action.databaseURL
                // todo?
            };

        default:
            return state;
    }
};


export default logInReducer;