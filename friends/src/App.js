import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form from "./components/Form";
import { PrivateRoute } from "./utils/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <ol>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/protected"> Protected Page</Link>
          </li>
          <Link to="/friendsform">FORM</Link>
        </ol>
        <Switch>
          <PrivateRoute exact path="/protectd" component={FriendsList} />
          <PrivateRoute exact path="/friendsform" component={Form} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
