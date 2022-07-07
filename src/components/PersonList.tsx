import React from "react";
type NameProp = {
  names: {
    first: string,
    last: string
  }[]
}

const PersonList = (props: NameProp) => {
  return (
    <div>
        {props.names.map((name) => (
          <div>
            <h1>{name.first}</h1>
          </div>
        ))}
    </div>
  );
};

export default PersonList;
