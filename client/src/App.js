import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div>
      <h1>Create Posts</h1>
      <PostCreate />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
