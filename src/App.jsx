import React, { Component, useState, useEffect } from 'react';
import { Navbar } from 'reactstrap';
import Sitebar from './site/navbar/Navbar';

import './App.css';

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
    <Sitebar clickLogout={logout}/>
  </div>
);
}

export default App;
