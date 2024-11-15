const axios = require("axios");

const index = async (req, res) => {
    try{
        // Mendapatkan data fakultas dari API eksternal
        const response = await axios.get(
            "https://express-application-generator-two.vercel.app/api/fakultas"
        );

        // Data fakultas dari API
        const fakultas = response.data;

        // Render halaman 'fakultas' dengan data yang diperoleh dari API
        res.render("fakultas", {
            title: "Halaman Fakultas",
            fakultas,
            layout: "main", 
        });
    } catch (error) {
        // Jika terjadi kesalahan saat mengambil data dari API
        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data dari fakultas dari API");
    }
};

module.exports = { index };