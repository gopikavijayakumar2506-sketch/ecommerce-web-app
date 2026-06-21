const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const Product = mongoose.model("Product", {
  name: String,
  price: Number
});

app.get("/products", async(req,res)=>{
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async(req,res)=>{
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
});
