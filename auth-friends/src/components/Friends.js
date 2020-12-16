import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import Form from "./Form";
import Details from "./Details";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <Form setFriends={setFriends} />
      <h2>Friends List</h2>
      {friends.map((friend) => (
        <Details key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;