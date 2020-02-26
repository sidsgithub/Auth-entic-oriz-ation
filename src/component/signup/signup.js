import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,Button } from 'reactstrap';

class Signup extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     email:'',
        //     password:'',
        //     repassword:''
        // }
        this.setEmailValue=this.setEmailValue.bind(this)
        this.setPasswordValue=this.setPasswordValue.bind(this)
        this.setRePasswordValue=this.setRePasswordValue.bind(this)
        this.handleClick = this.handleClick.bind(this)
       
    }

    setEmailValue(value) {
        // this.setState({email:value})
        this.props.setEmail(value)
    }
    setPasswordValue(value){
        // this.setState({password:value})
        this.props.setPassword(value)
    }
    setRePasswordValue(value){
        // this.setState({repassword:value})
        this.props.setRepassword(value)
    }
    handleClick() {
        this.props.handleSignUp(this.props.email, this.props.password)
    }

    render(){
        return(
            <Form onSubmit={ (e) => {
                e.preventDefault()
                this.handleClick()
            }}>
            <FormGroup>
                <Label for="Email">
                    Enter Email:
                </Label>
                <Input type="email" 
                        name="email" 
                        id="Email"
                        placeholder="Enter your mail"
                        onChange={(event) => 
                            this.setEmailValue(event.target.value)
                        }
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
                            }/>

            </FormGroup>
            <FormGroup>
                <Label for="Re-Password">
                    Re-Enter Password:
                </Label>
                <Input type="password" 
                        name="repassword" 
                        id="repassword" 
                        placeholder="Confirm your password"
                        onChange={(event) => 
                            this.setRePasswordValue(event.target.value)}/>
            </FormGroup>
            <Button type="submit" onClick = { () => this.handleClick()}>
            Sign Up
            </Button>
        </Form>
            
        );

    }

        
    }

export default Signup;