import React from "react";
import {  ButtonProps } from "@/interfaces";

const sizeStyles = {
  small: { padding: "4px 12px", fontSize: 12 },
  medium: { padding: "8px 20px", fontSize: 16 },
  large: { padding: "12px 28px", fontSize: 20 },
};

const shapeStyles = {
  "rounded-sm": { borderRadius: 4 },
  "rounded-md": { borderRadius: 12 },
  "rounded-full": { borderRadius: 9999 },
};

const Button = ({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
  type = "button",
  style,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    style={{
      background: "#0070f3",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      ...sizeStyles[size],
      ...shapeStyles[shape],
      ...style,
    }}
    className={className}
  >
    {children}
  </button>
);

export default Button;