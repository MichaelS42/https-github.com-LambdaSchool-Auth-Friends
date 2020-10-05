import React, { useState, useEffect } from "react";
import { axiosAuth } from "../utils/axiosAuth";
import Friends from "./Friends";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosAuth()
      .get("/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Friends
          key={friend.id}
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />
      ))}
    </div>
  );
};

export default FriendsList;
