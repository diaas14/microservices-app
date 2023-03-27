const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post("http://posts-clusterip-serv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios
    .post("http://comments-clusterip-serv:4001/events", event)
    .catch((err) => {
      console.log(err.message);
    });
  axios.post("http://query-clusterip-serv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-serv:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send("OK");
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event bus service running on port 4005");
});
