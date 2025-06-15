require("dotenv").config(); // Load .env sebelum require lain
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // Agar bisa menerima JSON body

// Simple API key middleware
const API_KEY = process.env.API_KEY || "devaamandabackendnodejs";
app.use((req, res, next) => {
    // Debug log untuk cek key
    // console.log('API_KEY dari env:', process.env.API_KEY);
    // console.log('Key dari request:', req.query.key, req.headers["x-api-key"]);
    const key = req.query.key || req.headers["x-api-key"];
    if (key && key === API_KEY) {
        next();
    } else {
        res.status(401).json({
            error: "Unauthorized: Invalid or missing API key.",
        });
    }
});

// Import activity routes
const activityRoutes = require("./routes/activityRoutes");
app.use("/", activityRoutes);

app.listen(3001, () => console.log("API running at http://localhost:3001"));
