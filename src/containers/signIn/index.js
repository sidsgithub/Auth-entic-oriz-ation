import { connect } from 'react-redux'
import SignIn from '../../component/signin/signin'
import axios from '../../axios';

const mapStateToProps = (state) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        isLoggedIn: state.signIn.isLoggedIn,
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
        handleSignIn: (email,password) => {
            (async () => {
                try{
                    dispatch({ type: ("SET_LOGGEDIN"), payload : {success: false } })

                    var payload = {
                        "email": email,
                        "password": password
                    }
                    axios.put('users',payload)
                        .then(async (response) => {
                        try {
                            localStorage.setItem("id_token_data", JSON.stringify(response.data));
                            if (JSON.parse(localStorage.getItem("id_token_data")).email === email &&
                                JSON.parse(localStorage.getItem("id_token_data")).success)
                                // this.setLoggedInValue(true)
                                dispatch({ type: ("SET_LOGGEDIN"), payload :{success: true }})
                        }
                        catch (e) {
                            console.log(e)
                        }
                    }).catch(err => console.log(err))
                }
                catch(e){
                    console.log(e)
                }
            })()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
