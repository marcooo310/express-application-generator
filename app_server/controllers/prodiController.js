// Mengimpor axios untuk melakukan HTTP request
const axios = require("axios");

const index = async (req, res) => {
    try {
        // Mendapatkan data prodi dari API external
        const response = await axios.get(
            "https://express-application-generator.vercel.app/api/prodi"
            // "http://localhost:3000/api/prodi"
        );

        // Data prodi dari API
        const prodi = response.data;

        // Render halaman 'prodi' dengan data yang diperoleh dari API
        res.render("prodi", {
            title: "Halaman Program Studi",
            prodi,
            layout: "main",
        });
    } catch (error) {
        // Menangani kesalahan saat mengambil data dari API
        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data program studi dari API");
    }
};

module.exports = { index };