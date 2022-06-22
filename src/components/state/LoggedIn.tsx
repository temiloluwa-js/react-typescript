import React from "react";
import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogin = () => {
    setisLoggedIn(true);
  };
  const handleLogOut = () => {
    setisLoggedIn(false);
  };
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
    </div>
  );
};
