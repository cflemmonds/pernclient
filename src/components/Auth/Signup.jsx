import React, { useState } from "react";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName, lastName, email, password);

    fetch('http://localhost:4000/user/register', {
      method: "POST",
      body: JSON.stringify ({firstName, lastName, email, password}),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => props.updateLocalStorage(data.sessionToken))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your legal first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Enter your legal last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="Enter an email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          minLength={5}
        />
        <br />
        <button type="submit" onSubmit={handleSubmit}>Submit Signup</button>
      </form>
    </div>
  );
};

export default Signup;
