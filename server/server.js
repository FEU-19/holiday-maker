const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const { routers } = require("./routes/index");
// Load config
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 8080;
const corsOptions = {
  credentials: true,
  origin: process.env.CLIENT_URI,
  exposedHeaders: ["set-cookie"],
};

// Db connection
connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

routers.forEach((router) => app.use("/api/", router));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
