const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.post("/events", (req, res) => {
  const { data, type } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { commentId, content, postId } = data;
    const post = posts[postId];
    post.comments.push({
      id: commentId,
      content,
    });
  }
  console.log(posts);
  res.send({});
});
console.log(posts);
app.get("/posts", () => {
  res.send(posts);
});

app.listen(4002, () => {
  console.log("Query-posts service running on port 4002");
});
