import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Posts() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))
      )}
    </div>
  );
}

export default Posts;
