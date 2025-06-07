import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: 8,
      padding: 16,
      margin: "12px 0",
    }}
  >
    <h3>{title}</h3>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;
