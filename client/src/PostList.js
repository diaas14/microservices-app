import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState(undefined);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

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
                <h3>{post.title}</h3>
                <CommentCreate postId={post.id} />
                <h2>Comments</h2>
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
