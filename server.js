require("dotenv").config(); // Load .env sebelum require lain
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // Agar bisa menerima JSON body

// Import activity routes
const activityRoutes = require("./routes/activityRoutes");
app.use("/", activityRoutes);

app.listen(3001, () => console.log("API running at http://localhost:3001"));
