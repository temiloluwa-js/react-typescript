import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  /**When type inference does not work due to the fact that
   *  you cannot specify a future value, 
   * you can use angle brackets (<>)
   *  to specify what is going to be
   *  in the state when a user fills 
   * in something */
  
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
      <p>
        User name is: {user?.name}, User email is: {user?.email}
      </p>
    </div>
  );
};
