import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "ade@ade.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log Out</button>
      <p>User name is: {user?.name}, User email is: {user?.email}</p>
    </div>
  );
};
