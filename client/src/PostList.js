import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState(undefined);

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {posts &&
        Object.values(posts).map((post) => {
          return (
            <div
              key={post.id}
              className="card"
              style={{ width: "30%", margin: "10px" }}
            >
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <CommentCreate postId={post.id} />
                <h5 className="card-subtitle mt-3">Comments</h5>
                <CommentList comments={post.comments} />
              </div>
            </div>
          );
        })}
      {!posts && <h3>loading...</h3>}
    </div>
  );
};

export default PostList;
