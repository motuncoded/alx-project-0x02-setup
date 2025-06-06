import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 16,
      margin: 8,
    }}
  >
    <h2>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;
