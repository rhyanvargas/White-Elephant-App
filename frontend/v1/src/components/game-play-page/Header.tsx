import React from "react";

interface HeaderProps {
  header: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="header align-center">
      <h1>{props.header}</h1>
    </div>
  );
};
