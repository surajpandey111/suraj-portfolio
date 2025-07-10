// src/AdminPosts.js

import React, { useState } from "react";
import "./Contact.css"; // reuse your neon style
import db from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AdminPosts() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    tags: "",
  });

  const [adminPass, setAdminPass] = useState(""); // password field

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (adminPass !== process.env.REACT_APP_ADMIN_PASSWORD) {
      alert("❌ Invalid Admin Password");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title: post.title,
        content: post.content,
        image: post.image,
        tags: post.tags.split(",").map((tag) => tag.trim()),
        date: serverTimestamp(),
      });
      alert("✅ Post added successfully!");
      setPost({ title: "", content: "", image: "", tags: "" });
      setAdminPass(""); // clear after success
    } catch (err) {
      console.error("Failed to add post:", err);
      alert("❌ Failed to add post");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card contact-right">
        <h2>Add New Post (Admin)</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Post Title"
            value={post.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Post Content"
            value={post.content}
            onChange={handleChange}
            required
          />
          <input
            name="image"
            placeholder="Image URL (optional)"
            value={post.image}
            onChange={handleChange}
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            value={post.tags}
            onChange={handleChange}
          />
          {/* password field */}
          <input
            type="password"
            name="adminPass"
            placeholder="Admin Password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            required
          />
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPosts;
