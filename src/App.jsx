import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./components/Auth/Auth";

const App = (props)=> {
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
  

  const clearLocalStorage = () => {
    localStorage.clear();
    setSessionToken("");
  };

  return (
    <div className="App">
      <h1>Welcome to Firelogger</h1>

      <Auth updateLocalStorage={updateLocalStorage} />
    </div>
  );
}

export default App;
