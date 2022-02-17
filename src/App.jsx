import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./components/Auth/Auth";
import PropertyIndex from "./components/Property/PropertyIndex"


const App = () => {
  const [sessionToken, setSessionToken] = useState("");
  const logout = () => {
    localStorage.clear();
    setSessionToken("");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    };

  const protectedPages = () => {
    const propertys = (
      <PropertyIndex token={sessionToken} clickLogout={logout} />
    );
    return sessionToken === localStorage.getItem("token") ? (
      <div>{propertys}</div>
    ) : (
      <Auth updateLocalStorage={updateLocalStorage} />
    );
  };
  return <div className="App">{protectedPages()}</div>;
};

export default App;
