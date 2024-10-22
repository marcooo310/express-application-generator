var express = require('express');
var router = express.Router();

/* GET home page. */
app.get("/", (req, res) => {
  //res.send("Hello");

  const berita = [
      {
          judul: "Berita 1",
          isi: "Isi Berita"
      },
      {
          judul: "Berita 2",
          isi: "isi berita 2"
      }
  ];
  res.render('index', {title:
  'Halaman Home', berita, layout : "main"});

});
module.exports = router;
