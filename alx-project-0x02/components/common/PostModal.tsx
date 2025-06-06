import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onSubmit?: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  onSubmit,
}) => {
  const [formTitle, setFormTitle] = useState(title);
  const [formContent, setFormContent] = useState(content);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formTitle, formContent);
    }
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          minWidth: 300,
          maxWidth: 500,
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2>New Post</h2>
          <div style={{ marginBottom: 12 }}>
            <label>
              Title:
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                style={{ width: "100%", padding: 8, marginTop: 4 }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              Content:
              <textarea
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 4,
                  minHeight: 80,
                }}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
