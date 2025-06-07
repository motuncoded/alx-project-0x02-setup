import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeStyles: Record<string, React.CSSProperties> = {
  small: { padding: "4px 12px", fontSize: 12 },
  medium: { padding: "8px 20px", fontSize: 16 },
  large: { padding: "12px 28px", fontSize: 20 },
};

const shapeStyles: Record<string, React.CSSProperties> = {
  "rounded-sm": { borderRadius: 4 },
  "rounded-md": { borderRadius: 12 },
  "rounded-full": { borderRadius: 9999 },
};

const Button: React.FC<ButtonProps> = ({
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
