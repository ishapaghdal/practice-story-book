import React from "react";
import { buttonStyles } from "./buttonStyles";

interface ButtonProps {
  selectedStyle: "primary" | "secondary";
}

const Button = ({ selectedStyle }: ButtonProps) => {
  // console.log("button", typeof(String(selectedStyle)));
  console.log(selectedStyle);
  
  console.log(buttonStyles[selectedStyle]);
  

  return (
    <button className={buttonStyles[selectedStyle]}>
      Submit
    </button>
  );
};

export default Button;
