const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const { routers } = require("./routes/index");

// Load config
dotenv.config({ path: "./config/config.env" });

// Db connection
connectDB();

const app = express();

// Body parser
app.use(express.json());

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
