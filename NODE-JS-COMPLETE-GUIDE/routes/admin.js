const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const products =[];
router.get('/add-product',(req,res,next)=>{
   // res.sendFile(path.join(rootDir,"views","add-product.html"));
   res.render('add-product',
      {  'viewName':'addProduct',
         'pageTitle':'Add Product',
         'formCSS':true,
         'productCSS':true,
         'activeAddProduct':true
      });
});

router.post('/add-product',(req,res,next)=>{
   products.push({'title':req.body.title});
   console.log(req.body);
   res.redirect("/");
});
//module.exports= router;
exports.routes = router;
exports.products = products;