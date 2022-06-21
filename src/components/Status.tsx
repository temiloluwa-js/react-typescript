import React from "react";
type StatusProps = {
    status: string
}
const Status = (props: StatusProps) => {
    let message
    if (props.status === "loading"){
        message = "Loading..."
    }
  return (
    <div>
        {message}
    </div>
  );
};

export default Status;
