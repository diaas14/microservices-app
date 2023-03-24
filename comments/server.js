const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const comments = commentsByPostId[req.params.id] || Array();
  res.send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || Array();
  comments.push({ id, content, status: "pending" });
  commentsByPostId[req.params.id] = comments;
  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id,
      content,
      postId: req.params.id,
      status: "pending",
    },
  });
  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentModerated") {
    const comments = commentsByPostId[data.postId];
    const comment = comments.find((comment) => comment["id"] == data.id);
    comment["status"] = data.status;
    console.log(`Updating status to ${data.status}`);
    await axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      data: data,
    });
  }
  res.send({});
});

app.listen(4001, () => {
  console.log("Comments service running on port 4001");
});
