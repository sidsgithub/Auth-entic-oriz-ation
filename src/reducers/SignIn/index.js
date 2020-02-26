const initialState = {
    email : '',
    password : '',
    isLoggedIn : '',
}

const useReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email : action.payload.value
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password : action.payload.value,
            }
        case 'SET_LOGGEDIN':
            return {
                ...state,
                isLoggedIn : action.payload.success,
            }
        default: return state
    }

}
export default useReducers;
