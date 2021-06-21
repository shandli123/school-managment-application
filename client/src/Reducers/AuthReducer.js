
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return { ...state, isSignedIn: true, userId: action.payload };
      
        case "LOG_IN":
            return { ...state, isSignedIn: true, userId: action.payload };
        case "LOG_OUT":
            return {
                ...state, isSignedIn: false,
                userId: null
            };
        default:
            return state;
    }

}