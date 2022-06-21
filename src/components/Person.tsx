import React from "react";
type PersonName = {
  name: { first: string; last: string };
};
export const Person = (props: PersonName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
