// Routing untuk endpoint aktivitas/habit
// Import controller dan middleware autentikasi
const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authController = require("../controllers/authController");

// Endpoint untuk regenerate API key (siapa saja bisa generate, TIDAK DIPROTEKSI API KEY)
router.post("/regenerate-key", authController.regenerateApiKey);

// Endpoint untuk mengambil semua data habit (wajib API key)
router.get(
    "/all",
    authController.verifyApiKey,
    activityController.getAllActivities
);

// Endpoint untuk mengambil 1 habit acak (wajib API key)
router.get(
    "/random",
    authController.verifyApiKey,
    activityController.getRandomActivity
);
// Endpoint untuk filter habit berdasarkan type (wajib API key)
router.get(
    "/filter",
    authController.verifyApiKey,
    activityController.getFilteredActivities
);
// Endpoint untuk detail habit berdasarkan id (wajib API key)
router.get(
    "/detail/:id",
    authController.verifyApiKey,
    activityController.getActivityById
);
// Endpoint untuk mengambil semua habit dalam urutan acak (wajib API key)
router.get(
    "/shuffled",
    authController.verifyApiKey,
    activityController.getShuffledActivities
);

// Contoh endpoint yang diproteksi API key (untuk testing)
router.get("/protected", authController.verifyApiKey, (req, res) => {
    res.json({ message: "API key valid, akses diterima." });
});

module.exports = router;
