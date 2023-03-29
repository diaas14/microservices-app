import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", {
      title,
    });
    setTitle("");
  };
  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <label>Add your post here</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary mt-2">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
