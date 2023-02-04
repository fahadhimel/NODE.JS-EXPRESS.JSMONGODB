const path = require("path");
const users = require("../models/users.model");
const Products = require("../models/products.model");

exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname+'/../views/product.html'));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const Product = {
    name,
    price,
  };
  Products.push(Product);
  res.status(201).json({
    success: true,
    Products,
  });
};
