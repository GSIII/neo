const express = require("express");
const request = require("request");
const CircularJSSON = require("circular-json");
const app = express();

app.get("/", (req, res) => {
  res.send("Web Server Started..");
});

app.get("/hello", (req, res) => {
  res.send({ data: "Hello World!!" });
});

let option1 = "http://192.168.1.20:8000/hello";
app.get("/rhello", function (req, res) {
  request(option1, { json: true }, function (err, result, body) {
    if (err) {
      console.log(err);
    }
    console.log(body);
    res.send(CircularJSSON.stringify(body));
  });
});

const data = JSON.stringify({ todo: "Buy the milk - Moon" });
app.get("/data", function (req, res) {
  res.send(data);
});

let option2 = "http://192.168.1.20:8000/data";
app.get("/rdata", function (req, res) {
  request(option2, { json: true }, function (err, result, body) {
    if (err) {
      console.log(err);
    }
    console.log(body);
    res.send(CircularJSSON.stringify(body));
  });
});

app.listen(8000, function () {
  console.log("Server is started 8000 Port");
});
