import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.updateLocalStorage(data.sessionToken);
      })

      .catch((err) => console.error(err));
  }
  return (
    <div>
      <form>
        <h1>Login</h1>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
        placeholder="Email Address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
        placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        <button type="submit" className="login" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
