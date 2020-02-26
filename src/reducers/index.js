import {combineReducers} from 'redux';
import signIn from './SignIn'
import signUp from './SignUp'

const rootReducer = combineReducers({
    signIn,
    signUp
})
export default rootReducer;