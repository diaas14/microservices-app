const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const eventHandler = (type, data) => {
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
  } else if (type === "CommentUpdated") {
    const { id, postId, content, status } = data;
    const comments = posts[postId].comments;

    let comment = comments.find((comment) => comment["id"] == id);
    comment.content = content;
    comment.status = status;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  eventHandler(type, data);
  res.send({});
});

app.listen(4002, async () => {
  console.log("Query-posts service running on port 4002");
  try {
    const res = await axios.get("http://event-bus-serv:4005/events");
    for (let event of res.data) {
      eventHandler(event.type, event.data);
    }
  } catch (err) {
    console.log(err.message);
  }
});
