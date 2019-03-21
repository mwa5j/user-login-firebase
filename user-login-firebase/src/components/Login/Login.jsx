import React, { Component } from 'react';
import app from "../../config/Base"
import LoginView from "./LoginView"


class Login extends Component {
    handleLogin = async e => {
        e.preventDefault();
        const {email, password} = e.target.elements
        try {
            const user = await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error)
        }

    }

    render() {
        return (
            <div className="App">
                <LoginView onSubmit={this.handleLogin} />
            </div>
        );
    }
}

export default Login;