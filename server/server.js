const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const { routers } = require("./routes/index");

// Load config
dotenv.config({ path: "./config/config.env" });

// Db connection
connectDB();

const app = express();

// Middleware
app.use(cors());

// Body parser
app.use(express.json());
app.use(cors());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

app.use(cookieParser());

routers.forEach((router) => app.use("/api/", router));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
