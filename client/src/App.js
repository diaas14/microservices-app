import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-4">Create Posts</h1>
        <PostCreate />
      </div>
      <div className="row">
        <h1 className="text-center my-4">Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default App;
