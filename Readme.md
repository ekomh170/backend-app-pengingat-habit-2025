# Backend API Pengingat Habit 2025

Backend API sederhana berbasis Node.js + Express untuk aplikasi pengingat habit/aktivitas positif. Data habit disimpan di file JSON, endpoint modular, dan sistem autentikasi menggunakan API key yang hanya valid jika sesuai dengan key di file `.env`. Key hasil regenerate hanya bisa di-generate dan disimpan, tidak bisa dipakai akses API. Mudah diintegrasikan ke frontend.

> **Lisensi & Perubahan**
> 
> Project ini open source untuk pembelajaran dan pengembangan. Jika ingin merubah, memodifikasi, atau menggunakan ulang sebagian/seluruh kode untuk project lain, harap kabarkan developer terlebih dahulu.

## Fitur Utama
- Data habit positif (100+), lengkap dengan id, deskripsi, dan link sumber
- Endpoint: all, detail, random, filter, shuffled, regenerate-key
- Key hasil regenerate hanya disimpan di database (SQLite), tidak bisa dipakai akses API
- Siap integrasi ke frontend React, dsb
