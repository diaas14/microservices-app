import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>Add your post here: </label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default PostCreate;
