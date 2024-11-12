// models/prodi.js
// Mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// Definisikan skema untuk prodi
const prodiSchema = new mongoose.Schema({
    // Field untuk nama prodi
    nama: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    // Field untuk singkatan prodi
    singkatan: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    fakultas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fakultas",
        required: true,
    },
    // Field untuk menyimpan tanggal pembuatan data prodi
    createdAt: {
        type: Date, // Tipe data tanggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model prodi dari skema yang telah didefinisikan
const prodi = mongoose.model("prodi", prodiSchema);

// Mengekspor model prodi agar dapat digunakan di file lain
module.exports = prodi;