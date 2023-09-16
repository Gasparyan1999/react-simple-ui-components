import React, { FC } from "react";
import "./customButton.css";

interface CustomButtonProps {
  text: string;
  basicColor?: string;
  secondaryColor?: string;
  fontSize?: number;
  handleClick: () => void;
}

type StylesType = {
  borderColor: string;
  color: string;
  backgroundColor: string;
  fontSize: number;
};

const CustomButton: FC<CustomButtonProps> = ({
  text,
  basicColor = "#ffffff",
  secondaryColor = "#000000",
  fontSize = 18,
  handleClick,
}) => {
  const styles: StylesType = {
    borderColor: secondaryColor,
    color: secondaryColor,
    backgroundColor: basicColor,
    fontSize,
  };

  return (
    <div onClick={handleClick} className="button-container" style={styles}>
      {text}
    </div>
  );
};

export default CustomButton;
