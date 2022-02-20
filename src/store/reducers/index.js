let initialState = {
    name: '',
    mobileNumber: '',
    email: '',
    gender: ''
}
const formReducer = function (state = initialState, action) {
    switch (action.type) {
      case "UPDATE_USER_INFO": {
        const { type, value } = action.payload;
        return {
            ...state,
            [type]: value
        }
      }
      case "CLEAR_USER_FORM": {
        return {
          ...state,
          ...initialState
        }
      }
      default:
        return state;
    }
  };

  export default formReducer;