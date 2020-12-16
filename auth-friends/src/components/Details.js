import React from "react";

const Details = ({ friend }) => {
  return (
    <div className="details-container">
      <h3>{friend.name}</h3>
      <p>{friend.email}</p>
      <p>Age: {friend.age}</p>
    </div>
  );
};

export default Details;