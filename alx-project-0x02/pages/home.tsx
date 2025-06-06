import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";

interface Post {
  title: string;
  content: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Welcome", content: "This is the welcome card." },
    { title: "About", content: "This card contains information about us." },
    { title: "Contact", content: "Reach out to us via email or phone." },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setModalOpen(true)} style={{ marginBottom: 16 }}>
        Add Post
      </button>
      {posts.map((post, idx) => (
        <Card key={idx} title={post.title} content={post.content} />
      ))}
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title=""
        content=""
        onSubmit={handleAddPost}
      />
    </div>
  );
}

export default Home;
