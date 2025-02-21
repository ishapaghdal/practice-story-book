import React from "react";
import { buttonStyles } from "./buttonStyles";

const Button = ({ selectedStyle }: Record<string,string>) => {
  return <button className={buttonStyles[selectedStyle]}>Submit</button>;
};

export default Button;
