import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import socketHandlers from "./src/socketHandlers.js";


const app = express();

const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST"],
  credentials: false,
  allowedHeaders: ["Content-Type", "Authorization", "ngrok-skip-browser-warning"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: "Backend Open" });
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: corsOptions,
  transports: ["websocket", "polling"]
});

io.on("connection", (socket) => {
  console.log(" Cliente conectado:", socket.id);
  socketHandlers(io, socket);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});