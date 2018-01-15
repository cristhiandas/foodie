const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = app => {
  app.get('/api/products', function(req, res){
    console.log(req.query.category);
    Product.find( {} )
      .sort( {expiryDate: 'desc'} )
      .then((products) => {
        res.json(products)
      })
  });

  // sort by price ascending:
  app.get('/api/products/price/ascending', function(req, res){
    console.log(req.query.category);
    Product.find( {} )
      .sort( {price: 'asc'} )
      .then((products) => {
        res.json(products)
      })
  });

// sort by price decending:
app.get('/api/products/price/decending', function(req, res){
  console.log(req.query.category);
  Product.find( {} )
    .sort( {price: 'desc'} )
    .then((products) => {
      res.json(products)
    })
});


  app.get('/api/products/categories/:category', function(req, res){
    Product.find({ category: req.params.category})
      .then((products) => {
        res.json(products)
      })
  })

  // multi-parameter filter:
  // app.get('api/products/filteredBy/:filters', function (req, res){
  //   var filters = req.params.filters;
  //   var responseObject= { message: ' Filtered products:' filtered};
  //   res.send(responseObject);
  // })

  app.delete('/api/products/delete/:title', function(req, res){
    Product.remove({ title: req.params.title })
      .then(() => {
        console.log("deleted");
    });
  });

  app.get('/api/products/:title', function(req, res){
    Product.find({ title: req.params.title })
      .sort({expiryDate: 'desc'})
      .then(function(products) {
        res.json(products);
    });
  });

//sends delete request remember not to test in google
  app.delete('/api/products/delete/:title', function(req, res){
    Product.remove({ title: req.params.title})
      .then(() => {
        console.log("deleted");
    });
  });
}
