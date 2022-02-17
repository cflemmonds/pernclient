import React, { useState } from "react";
import APIURL from "../../helpers/environment";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${APIURL}/user/register`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => props.updateLocalStorage(data.sessionToken))
      .catch((err) => console.error(err));
  }

  function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Signup.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your legal first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          placeholder="Enter your legal last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter an email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          minLength={5}
        />
        <br />
        <button type="submit" className='signup' onSubmit={handleSubmit, ValidateEmail}>Submit Signup</button>
      </form>
    </div>
  );
};

export default Signup;
