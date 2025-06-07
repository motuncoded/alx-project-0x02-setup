import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div
    style={{
      border: "1px solid #bbb",
      borderRadius: 8,
      padding: 16,
      margin: "12px 0",
    }}
  >
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>
      Address: {address.street}, {address.suite}, {address.city},{" "}
      {address.zipcode}
    </p>
  </div>
);

export default UserCard;
