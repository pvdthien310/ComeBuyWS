const app = require("./index");
const { Server } = require("socket.io");
require("dotenv").config();
const port = process.env.PORT || 8081;

const httpServer = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

const ws = new Server(httpServer);

app.post("/websocket", (req, res) => {
  ws.emit(req.body.destination, JSON.stringify(req.body.data));
  res.send("Successfully");
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message, err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err);
  httpServer.close(() => {
    process.exit(1);
  });
});
