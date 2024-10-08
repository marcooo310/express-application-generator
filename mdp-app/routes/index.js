var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
