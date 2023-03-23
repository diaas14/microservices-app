import React from "react";

const CommentList = ({ comments }) => {
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
