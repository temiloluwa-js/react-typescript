import React from "react";
type PersonListProps = {
  names: string[]
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name}>
            {name}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
