import React from 'react'
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div>
      <h1>Hello from Auth</h1>
      <Signup updateLocalStorage={props.updateLocalStorage}/>
      <Login updateLocalStorage={props.updateLocalStorage}/>
    </div>
  );
};

export default Auth;
