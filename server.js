const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/app", express.static("app"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/app`);
});

let users = [
  { id: 1, name: "Sol", password: "holasoysol" },
  { id: 2, name: "Alejandro", password: "holasoyalejo" },
  { id: 3, name: "Monk", password: "holasoymonk" },
];

let messages = [
  { from: "Yo", to: "Sol", message: "este es un mensaje" },
  { from: "Mi", to: "Alejandro", message: "este es un mensaje" },
  { from: "Mi", to: "Monk", message: "este es un mensaje" },
  { from: "Mi", to: "Monk", message: "este es otro mensaje" },
  { from: "Mi", to: "Monk", message: "este es el último mensaje" },
];

// GET Method
app.get("/messages", (request, response) => {
  response.send(messages);
});

//POST Method
app.post("/messages", (request, response) => {
  console.log(request.body);
  messages.push(request.body);
  response.end();
});
