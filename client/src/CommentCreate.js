import React, { useState } from "react";
import axios from "axios";

const CommentCreate = (props) => {
  const [comment, setComment] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, {
      content: comment,
    });
    setComment("");
  };
  return (
    <div className="container mt-3">
      <form onSubmit={submitHandler}>
        <label>Write a comment</label>
        <input
          className="form-control"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary mt-2">Comment</button>
      </form>
    </div>
  );
};

export default CommentCreate;
