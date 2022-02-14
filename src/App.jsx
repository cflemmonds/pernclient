import React, { Component, useState, useEffect } from 'react';
import Sitebar from './site/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./components/Auth/Auth";



function App() {
  const [sessionToken, setSessionToken] = useState('');
  const logout = () => {
    localStorage.clear();
    setSessionToken('');
    console.log("clicked")
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

return (
  <div>
    <h1>Welcome to Firelogger</h1>
    <Auth updateLocalStorage={updateLocalStorage} />
    <Sitebar clickLogout={logout}/>
  </div>
);
}
export default App;
