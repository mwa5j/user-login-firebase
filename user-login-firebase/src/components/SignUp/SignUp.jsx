import React, { Component } from 'react';
import {withRouter} from 'react-router'
import app from "../../config/Base"
import SignUpView from "./SignUpView"
import { async } from 'q';

class SignUp extends Component {
    handleSignUp = async e => {
        e.preventDefault();
        const {email, password} = e.target.elements
        try {
            const user = await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <div className="App">
                <SignUpView onSubmit={this.handleSignUp} />
            </div>
        );
    }
}

export default SignUp;