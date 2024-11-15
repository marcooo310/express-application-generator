// models/user.js
// Mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Definisikan skema untuk prodi
const userSchema = new mongoose.Schema({
    nama: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
    },
    // Field untuk singkatan prodi
    email: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        unique: true, // Menghapus spasi di awal dan akhir string
    },
    password: {
        type: String,
        required: true,
    },
    // Field untuk menyimpan tanggal pembuatan data prodi
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user," 
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

userSchema.pre("save", async function (next){
    if (!this.isModified("password")) {
        // Jika password tidak diubah, lanjutkan tanpa meng-enkripsi ulang
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model("User", userSchema);