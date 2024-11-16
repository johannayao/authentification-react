import http from "http";
import express from "express";
import cors from "cors";
import authRouter from "./routers/auth.router.js";
import connectDB from "./config/db.js";

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

const server = http.createServer(app);
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
