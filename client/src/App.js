import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import Posts from "./pages/Posts";
import Yard from "./pages/Yard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/channel" component={Channel} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/yard" component={Yard} />
          <Route exact path="/chat" component={Chat} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
