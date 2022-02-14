import React, { Component, useState, useEffect } from 'react';
import Sitebar from './site/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./components/Auth/Auth";
import PropertyIndex from "./components/Property/PropertyIndex"


const App = ()=> {
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
  const protectedPages = () => {
    return (sessionToken === localStorage.getItem('token') ? <PropertyIndex token={sessionToken}/> : <Auth updateLocalStorage={updateLocalStorage}/>)
  }
  return (
    <div className="App">
      <h1>Welcome to Firelogger</h1>
      {protectedPages()}
      <Sitebar clickLogout={logout}/>
    </div>
  );
}

export default App;

