// Mengimpor model Prodi untuk berinteraksi dengan koleksi Prodi di MongoDB
const Prodi = require("../models/prodi");
// Mendapatkan semua data Prodi
const getAllProdi = async (req, res) => {
    try {
        // Mengambil semua Prodi dari database
        const Prodi = await Prodi.find().populate("fakultas_id", "nama singkatan");
        // Mengirimkan respons dengan status 200 dan data Prodi
        res.status(200).json(Prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Mendapatkan satu Prodi berdasarkan ID
const getProdiById = async (req, res) => {
    try {
        // Mencari Prodi berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika Prodi tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }
        // Mengirimkan respons dengan status 200 dan data Prodi
        res.status(200).json(Prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Membuat Prodi baru
const createProdi = async (req, res) => {
    // Membuat instance Prodi baru dari data yang diterima
    const prodi = new Prodi({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
        fakultas_id: req.body.fakultas_id,
    });

    try {
        // Menyimpan Prodi baru ke database
        const newProdi = await Prodi.save();
        // Mengirimkan respons dengan status 201 dan data Prodi baru
        res.status(201).json(newProdi);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message });
    }
};

// Memperbarui data Prodi
const updateProdi = async (req, res) => {
    try {
        // Mencari Prodi berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika Prodi tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }

        // Memperbarui nama Prodi jika ada di request body
        if (req.body.nama != null) {
            prodi.nama = req.body.nama;
        }
        // Memperbarui singkatan prodi jika ada di request body
        if (req.body.singkatan != null) {
            prodi.singkatan = req.body.singkatan;
        }

        // Memperbarui fakultas id jika ada di request body
        if (req.body.singkatan != null) {
            prodi.fakultas_id = req.body.fakultas_id;
        }

        // Menyimpan perubahan ke database
        const updatedProdi = await Prodi.save();
        // Mengirimkan respons dengan status 200 dan data Prodi yang diperbarui
        res.status(200).json(updatedProdi);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat memperbarui
        res.status(400).json({ message: err.message });
    }
};

// Menghapus Prodi berdasarkan ID
const deleteProdi = async (req, res) => {
    try {
        // Mencari Prodi berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika Prodi tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }

        // Menghapus Prodi dari database
        await prodi.deleteOne();
        // Mengirimkan respons dengan status 200 dan pesan penghapusan
        res.status(200).json({ message: "Prodi deleted" });
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Mengeksport fungsi-fungsi kontroler agar dapat digunakan di file lain
module.exports = {
    getAllProdi,
    createProdi,
    getProdiById,
    updateProdi,
    deleteProdi,
};