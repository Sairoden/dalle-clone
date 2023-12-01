// LIBRARIES
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = require("./app");

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("🤯 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// 3:26
