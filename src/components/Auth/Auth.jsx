import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div>
      <h1 className="title">FireLogger</h1>
<br />
      <br />
      <br />
      <br />
      <div className="splash">
      <Signup updateLocalStorage={props.updateLocalStorage} />
      <br />

      <Login updateLocalStorage={props.updateLocalStorage} />
    </div>
    </div>
  );
};

export default Auth;
