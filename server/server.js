const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { routers } = require("./routes/index");
// Load config
dotenv.config({ path: "./config/config.env" });

// Db connection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

routers.forEach((router) => app.use("/api/", router));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
