import React, { FC } from "react";
import "./spinLoader.css";

type Color = "white" | "black";
type Size = "small" | "medium" | "large";

interface SpinLoaderProps {
  size?: Size;
  color?: Color;
}

const SpinLoader: FC<SpinLoaderProps> = ({
  size = "medium",
  color = "black",
}) => {
  const getLoaderColor = (color: Color): string => {
    switch (color) {
      case "white":
        return `custom-basic-loader-white`;
      case "black":
        return `custom-basic-loader-black`;
    }
  };

  const getLoaderSize = (size: Size): { width: number; height: number } => {
    switch (size) {
      case "small":
        return {
          width: 35,
          height: 35,
        };
      case "medium":
        return {
          width: 45,
          height: 45,
        };
      case "large":
        return {
          width: 55,
          height: 55,
        };
    }
  };

  return <div style={getLoaderSize(size)} className={getLoaderColor(color)} />;
};

export default SpinLoader;
