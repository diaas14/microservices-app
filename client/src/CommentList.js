import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul className="list-group">
      {comments?.map((comment) => {
        let content;
        switch (comment.status) {
          case "approved":
            content = comment.content;
            break;
          case "pending":
            content = "This comment is awaiting moderation";
            break;
          case "declined":
            content = "This comment is flagged as inappropriate by moderator";
            break;
          default:
            break;
        }
        return (
          <li key={comment.id} className="list-group-item">
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
