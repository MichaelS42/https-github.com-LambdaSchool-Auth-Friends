import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form from "./components/Form";
import  PrivateRoute  from "./utils/PrivateRoute";
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
          <Link to="/form">FORM</Link>
        </ol>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
