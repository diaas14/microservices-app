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
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({
      id,
      content,
      status,
    });
  }
  if (type === "CommentUpdated") {
    const { id, postId, content, status } = data;
    const comments = posts[postId].comments;
    let comment = comments.find((comment) => comment["id"] == id);
    comment.content = content;
    comment.status = status;
  }
  console.log(posts);
  res.send({});
});
console.log(posts);

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.listen(4002, () => {
  console.log("Query-posts service running on port 4002");
});
