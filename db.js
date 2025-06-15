// Modul untuk inisialisasi dan koneksi database SQLite
// Database ini hanya digunakan untuk menyimpan API key hasil regenerate (bukan untuk autentikasi utama)
// File database: apikeys.db

const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const db = new sqlite3.Database(path.join(__dirname, "apikeys.db"));

// Membuat tabel apikeys jika belum ada
// Kolom: id (auto increment), key (unik), created_at (timestamp)
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS apikeys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Ekspor objek db untuk digunakan di controller
module.exports = db;
