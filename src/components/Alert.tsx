import React from "react";

interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alertContainer">
      <h1 className="header">{children}</h1>
    </div>
  );
};

export default Alert;
