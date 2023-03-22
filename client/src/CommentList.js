import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${props.postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <ul className="list-group">
      {comments.map((comment) => {
        return (
          <li key={comment.id} className="list-group-item">
            {comment.content}
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
