const index = (req, res, ) => {
  const berita = [
      {
          judul:"Berita 1",
          isi: "Isi berita 1"
      },
      {
          judul:"Berita 2",
          isi: "Isi berita 2"
      },
  ];
  res.render('index' , {title : 'Halaman Home', berita, layout : 'main'});
};

// route /about
const about = (req, res) => {
  res.render('about' , {title : 'About Us', layout : 'main' });
}

// route /contact
const contact = (req,res) => {
  res.render('Contact' , {title : 'Contact Us', layout : 'main'});
}

module.exports = {index, about, contact}