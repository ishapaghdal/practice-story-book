import React from "react";
import { buttonStyles } from "./buttonStyles";

interface ButtonProps {
  selectedStyle: "primary" | "secondary";
}

const Button = ({ selectedStyle }: ButtonProps) => {
  return <button className={buttonStyles[selectedStyle]}>Submit</button>;
};

export default Button;
