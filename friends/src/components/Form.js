import React, { useState } from "react";
import { axiosAuth } from "../utils/axiosAuth";

const Form = (props) => {
  const [friend, setFriend] = useState({
    name: "",
    email: "",
    age: "",
    id: Date.now(),
  });
  const handleChanges = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuth()
      .post("./friends", friend)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error ", err));
    setTimeout(() => {
      props.history.push("/protected");
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChanges}
          placeholder="name"
        ></input>
        <input
          type="text"
          name="email"
          value={friend.email}
          onChange={handleChanges}
          placeholder="email"
        ></input>
        <input
          type="text"
          name="age"
          value={friend.age}
          onChange={handleChanges}
          placeholder="age"
        ></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );

};

export default Form;
