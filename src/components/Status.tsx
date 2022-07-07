import React from "react";
type StatusProps = {
    status: 'loading' | 'Success' | 'Error'
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
