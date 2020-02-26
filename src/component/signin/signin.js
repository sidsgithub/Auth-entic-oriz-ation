import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Route, Redirect } from 'react-router-dom';
import Homescreen from '../Homescreen/homescreen';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.setEmailValue = this.setEmailValue.bind(this)
        this.setPasswordValue = this.setPasswordValue.bind(this)
        this.setLoggedInValue = this.setLoggedInValue.bind(this)
        this.clickHandler = this.clickHandler.bind(this)

    }

    setEmailValue(event) {
        this.props.setEmail(event.target.value)
        console.log(this.props)
    }
    setPasswordValue(value) {
        // this.setState({password:value})
        this.props.setPassword(value)
    }
    setLoggedInValue(value) {
        // this.setState({isLoggedIn:value})
        this.props.setLoggedIn(value)
    }
    clickHandler(){
        this.props.handleSignIn(this.props.email, this.props.password)
    }
    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="Email">
                            Enter Email:
                    </Label>
                    {console.log("Props",this.props)}
                        <Input type="email"
                            name="email"
                            id="Email"
                            placeholder="Enter your mail"
                            onChange={this.setEmailValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Pasword">
                            Enter Password:
                    </Label>
                        <Input type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            onChange={(event) =>
                                this.setPasswordValue(event.target.value)
                            } />

                    </FormGroup>

                    <Button onClick={() =>this.clickHandler()}>
                        Sign In
                </Button>
                </Form>
                <Route path="/homescreen" component={Homescreen} />
                {this.props.isLoggedIn && <Redirect to="/homescreen" />}
            </React.Fragment>
        );

    }
}
export default SignIn;