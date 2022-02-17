import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div>
      <h1 className="spltitle">FireLogger</h1>
      



      <div className="splash">
      <Signup updateLocalStorage={props.updateLocalStorage} />


      <Login updateLocalStorage={props.updateLocalStorage} />
    </div>
    </div>
  );
};

export default Auth;
