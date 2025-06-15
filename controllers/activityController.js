// Controller untuk endpoint aktivitas/habit
// Semua data diambil dari file JSON (tidak ada database untuk habit)
// Setiap fungsi sesuai endpoint yang ada di routes

const activities = require("../data/activities.json");

// Ambil 1 aktivitas/habit acak
exports.getRandomActivity = (req, res) => {
    res.set("Cache-Control", "no-store"); // Cegah cache agar data random selalu berubah
    const idx = Math.floor(Math.random() * activities.length);
    res.json(activities[idx]);
};

// Filter aktivitas berdasarkan query type (misal: ?type=health)
exports.getFilteredActivities = (req, res) => {
    let filtered = activities;
    if (req.query.type) {
        filtered = filtered.filter((a) => a.type === req.query.type);
    }
    res.json(filtered);
};

// Endpoint untuk mengambil semua data sesuai urutan asli (tidak diacak)
exports.getAllActivities = (req, res) => {
    res.json(activities);
};

// Endpoint untuk mengambil detail aktivitas berdasarkan id
exports.getActivityById = (req, res) => {
    const id = parseInt(req.params.id);
    const found = activities.find((a) => a.id === id);
    if (found) {
        res.json(found);
    } else {
        res.status(404).json({ error: "Activity not found" });
    }
};

// Endpoint untuk mengambil semua data dalam urutan acak (shuffled)
exports.getShuffledActivities = (req, res) => {
    // Algoritma Fisher-Yates shuffle (acak array tanpa mengubah data asli)
    const shuffled = [...activities];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    res.json(shuffled);
};
