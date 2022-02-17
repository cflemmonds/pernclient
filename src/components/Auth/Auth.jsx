import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div>
      <h1 className="spltitle">FireLogger</h1>
      <Signup className="splash" updateLocalStorage={props.updateLocalStorage} />
      <Login className="splash" updateLocalStorage={props.updateLocalStorage} />

    </div>
  );
};

export default Auth;
