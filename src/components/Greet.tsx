import React from "react";
type GreetProp = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProp) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name} You have {props.messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guests</h2>
      )}
    </div>
  );
};
