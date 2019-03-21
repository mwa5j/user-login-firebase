import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import app from "./config/Base"
import Home from "./components/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {

  state = {
    loading: true,
    authenticated: false,
    user: null
  }

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const {authenticated, loading} = this.state;

    if(loading){
      return <p>Loading...</p>
    }

    return (
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
