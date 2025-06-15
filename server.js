require("dotenv").config(); // Load .env sebelum require lain
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json()); // Agar bisa menerima JSON body

// Import activity routes
const activityRoutes = require("./routes/activityRoutes");
app.use("/", activityRoutes);

// Serve home.html untuk root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(3001, () => console.log("API running at http://localhost:3001"));
