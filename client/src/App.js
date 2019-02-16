//importing react
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//
import Landing from "./pages/Landing";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import Posts from "./pages/Posts";
import Yard from "./pages/Yard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Chat from "./pages/Chat";

import jwt_decode from 'jwt-decode';
import setToken from './redux/setToken';
import { setCurrentUser, logoutUser } from './redux/actions/auth';

import { Provider } from "react-redux";
import store from "./redux/store";

if(localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decode));

  const currentTime = Date.now() / 1000;
  if(decode.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login"
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/channel" component={Channel} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/yard" component={Yard} />
              <Route exact path="/chat" component={Chat} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  } 
}

export default App;
