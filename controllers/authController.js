// Controller untuk autentikasi API key
// Hanya API key dari .env yang valid untuk akses endpoint
// Key hasil regenerate hanya bisa di-generate dan disimpan di database, tidak bisa dipakai akses API

const db = require("../db");
let API_KEY = process.env.API_KEY || "devaamandabackendnodejs";

// Endpoint untuk regenerate API key
// Siapa saja bisa generate key baru, tapi hanya key default dari .env yang valid untuk akses endpoint
exports.regenerateApiKey = (req, res) => {
    // Generate random API key (32 karakter)
    API_KEY = Math.random().toString(36).substr(2, 32);
    // Simpan key baru ke database (hanya untuk catatan, tidak dipakai autentikasi)
    db.run(
        "INSERT OR IGNORE INTO apikeys(key) VALUES (?)",
        [API_KEY],
        (err) => {
            if (err) return res.status(500).json({ error: "DB error" });
            res.json({ apiKey: API_KEY });
        }
    );
};

// Middleware untuk verifikasi API key pada setiap request endpoint yang diproteksi
// Hanya key dari .env yang diterima, key lain (termasuk hasil regenerate) akan ditolak
exports.verifyApiKey = (req, res, next) => {
    const key = req.query.key || req.headers["x-api-key"];
    if (key && key === (process.env.API_KEY || "devaamandabackendnodejs")) {
        next();
    } else {
        res.status(401).json({
            error: "Unauthorized: Invalid or missing API key.",
        });
    }
};
