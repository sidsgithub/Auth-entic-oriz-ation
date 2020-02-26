import { connect } from 'react-redux'
import Signup from '../../component/signup/signup'
import axios from '../../axios';

const mapStateToProps = (state) => {
    return {
        email: state.signUp.email,
        password: state.signUp.password,
        repassword: state.signUp.repassword,
        signedUp: state.signUp.signedUp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (value) => {
            dispatch({
                type: ("SET_EMAIL"),
                payload: {
                    value,
                }
            })
        },
        setPassword: (value) => {
            dispatch({
                type: ("SET_PASSWORD"),
                payload: {
                    value,
                }
            })
        },
        setRepassword: (value) => {
            dispatch({
                type: ("SET_REPASSWORD"),
                payload: {
                    value,
                }
            })
        },
        handleSignUp: (email,password) => {
            (async () => {
                try {
                    dispatch({ type: ("CALL_HANDLER"), payload : {success: false } })
                    var payload = {
                        "email": email,
                        "password": password
                    }
                    axios.post('users', payload).then(
                        function (response) {
                            dispatch({ type: ("CALL_HANDLER"), payload :{success: true }})
                            console.log(response.data)
                        }
                    ).catch(err => console.log(err))
                }
                catch (e) {
                    console.err(e)
                }
                
            })()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)