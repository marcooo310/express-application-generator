const { index } = require("./mainController");

const get = (req,res) => {

  const prodi = [
      {
          prodi: "Sistem Informasi",
          fakultas: "FIKR",
          singkatan: "SI"
      },
      {
          prodi: "Informatika",
          fakultas: "FIKR",
          singkatan: "IF"
      },
      {
          prodi: "Teknik Elektro",
          fakultas: "FIKR",
          singkatan: "TE"
      },
      {
          prodi: "Manajemen Informatika",
          fakultas: "FIKR",
          singkatan: "MI"
      },
      {
          prodi: "Manajemen",
          fakultas: "FEB",
          singkatan: "MJ"
      },
      {
          prodi: "Akutansi",
          fakultas: " FEB",
          singkatan: "AK"
      },

  ]

  res.render('Prodi' , {title : "Prodi", prodi, layout : 'main'});
};

module.exports = {index}