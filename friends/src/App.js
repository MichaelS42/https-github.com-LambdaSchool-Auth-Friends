import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router.dom";
import Form from "./components/Form";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
