// src/pages/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams(); // get dynamic param
  return <h2>Blog Post ID: {postId}</h2>;
}

export default BlogPost;
