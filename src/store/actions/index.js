export const updateUserInfo = (value, type) => {
    return {
        type: 'UPDATE_USER_INFO',
        payload: {
            type,
            value
        }
    };
}

export const clearForm = () => {
    return {
        type: 'CLEAR_USER_FORM'
    };
}