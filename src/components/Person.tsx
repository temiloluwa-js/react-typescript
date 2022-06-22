import React from "react";
import { PersonName } from "./Person.types";
export const Person = (props: PersonName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
