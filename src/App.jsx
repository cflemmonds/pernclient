import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./components/Auth/Auth";
import PropertyIndex from "./components/Property/PropertyIndex"

const App = ()=> {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  
  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  };
  

  // const clearLocalStorage = () => {
  //   localStorage.clear();
  //   setSessionToken("");
  // };

  const protectedPages = () => {
    return (sessionToken === localStorage.getItem('token') ? <PropertyIndex token={sessionToken}/> : <Auth updateLocalStorage={updateLocalStorage}/>)
  }
  return (
    <div className="App">
      <h1>Welcome to Firelogger</h1>
      {protectedPages()}
    </div>
  );
}

export default App;