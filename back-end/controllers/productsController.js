
const express = require("express");
const products = express.Router({ mergeParams: true });

const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products.js");

const db = require("../db/dbConfig.js");

// MIDDLEWARE

products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.status(200).json(allProducts);
});

//show
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    if (product.id) {
      res.status(200).json(product);
    } else {
      throw `NO item found at index: ${id}`;
    }
  } catch (e) {
    res.status(404).json({ err: "not found", message: e });
  }
});

// delete
products.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteProduct(id);
    res.status(200).json(deleted);
  } catch (e) {
    res.status(404).json({error: e})
  }
});


//create
products.post("/", async (req, res, next) => {
  console.log(req.body)
  try {
    const product = await createProduct(req.body);
    res.status(200).json(product);
  } catch (e) {
    return next(e);
  }
});


// update
products.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await updateProduct(id, req.body);
    res.status(200).json(product);
  } catch (e) {
    return next(e);
  }
});

// Error handling

module.exports = products;