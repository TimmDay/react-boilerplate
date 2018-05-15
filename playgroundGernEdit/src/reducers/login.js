// Login Reducer

const logInReducerDefaultState = {
    username: '',
    password: '',
    databaseConnection: ''
};

const logInReducer = (state = logInReducerDefaultState, action) => {

    switch (action.type) {
        case 'LOG_IN':

            return {
                ...state
            }
    }
}