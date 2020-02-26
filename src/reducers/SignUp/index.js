const initialState = {
    email : '',
    password : '',
    repassword : '',
    signedUp : ''
}

const useReducers = (state = initialState, action) => {
    switch(action.type){
        case 'SET_EMAIL':
            return {
                ...state,
                email : action.payload.value
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password : action.payload.value
            }
        case 'SET_REPASSWORD':
            return {
                ...state,
                repassword : action.payload.value
            }
        case 'CALL_HANDLER':
            return {
                ...state,
                signedUp : action.payload.success
            }
        default: return state
    }
}

export default useReducers;