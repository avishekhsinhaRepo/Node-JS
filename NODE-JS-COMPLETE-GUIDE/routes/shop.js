const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/',(req,res,next)=>{
  console.log(adminData.products);
  //res.sendFile(path.join(rootDir,"views","shop.html"));
  const products = adminData.products;
  res.render('shop',
    { prods:products,
      'pageTitle':'Shop',
      'viewName':'shop',
      'hasProduct' :products.length >0,
      'formCSS':false,
      'productCSS':true,
      'activeShop':true
    });
 });
module.exports=router;
