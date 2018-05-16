//todo import something for password encryption?

// Action Generator - log in

export const addLogInDetails = (
    {
        userName,
        password,
        databaseURL
    } = {}
    ) => ({
        type: 'LOG_IN',
        userName,
        password,
        databaseURL
    }
);