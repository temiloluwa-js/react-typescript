import React from "react";
type HeadingProps = {
  children: React.ReactNode;
};
export const Oscar = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
