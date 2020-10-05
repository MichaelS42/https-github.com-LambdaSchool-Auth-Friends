import React, { useState } from "react";
import { axiosAuth } from "../utils/axiosAuth";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(window.localStorage.getItem("authToken"));

    const credentials = {
      username: username,
      password: password,
    };

    axiosAuth()
      .post("/login", credentials)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("authToken", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserName}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
