const express = require("express");
const products = express.Router({ mergeParams: true });

const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products.js");

const {    ProductNotCreatedError,
  ValidationError,
  customErrorHandler } = require("../helper.js")

// const db = require("../db/dbConfig.js");

// MIDDLEWARE
const validateProduct = (req, res, next) => {
  console.log(req.body)
  try {
    const { name, price, category, is_popular, img } = req.body;

    let isProductValid = true;
    let errorMsg = "Product request not formatted correctly: ";

    if (typeof name !== "string") {
      isProductValid = false;
      errorMsg += "The 'name' field must be of type 'string'";
    }
    if (typeof price !== "number") {
      isProductValid = false;
      errorMsg += "The 'price' field must be of type 'number'";
    }
    if (typeof category !== "string") {
      isProductValid = false;
      errorMsg += "The 'category' field must be of type 'string'";
    }
    if (typeof is_popular !== "boolean") {
      isProductValid = false;
      errorMsg += "The 'is_popular' field must be of type 'boolean'";
    }
    if (typeof img !== "string") {
      isProductValid = false;
      errorMsg += "The 'img' field must be of type 'string'";
    }
    if (isProductValid !== true) {
      throw new ValidationError(errorMsg);
    }
  } catch (e) {
    next(e);
  }
  return next();
};


// index
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



//create
products.post("/", validateProduct, async (req, res, next) => {

  try {
    const product = await createProduct(req.body);
    console.log(product["id"])
    res.status(200).json(product);
    // if (product["id"]) {
    //   res.status(200).json(product);
      
    // } else {
    //   const msg = `Product not addedd to database: ${JSON.stringify(req.body)}`
    //   throw new ProductNotCreatedError(msg)
    // }
  } catch (e) {
    return next(e);
  }
});


// update
products.put("/:id", validateProduct ,async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await updateProduct(id, req.body);
    console.log(`products id ${product}`)
    if (product["id"]) {

      res.status(200).json(product);
    } else {
      const msg = `Product not added to database: ${JSON.stringify(req.body)}`
      throw new ProductNotCreatedError(msg)
    }
  } catch (e) {
    return next(e);
  }
});

// delete
products.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteProduct(id);
    if (deleted.id) {

      res.status(200).json(deleted);
    } else {
      const msg = `Product not deleted from database: ${id}`
      throw new ProductNotCreatedError(msg);
    }
  } catch (e) {
    next(e)
  }
});


// Error handling
products.use(customErrorHandler);

module.exports = products;
