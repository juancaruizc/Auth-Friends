import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

const Form = ({ setFriends }) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Friends</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChanges}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formValues.age}
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChanges}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;