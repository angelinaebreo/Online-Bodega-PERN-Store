const db = require("../db/dbConfig.js");

//index
const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (err) {
    return err;
  }
};
//Show
const getProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (err) {
    return err;
  }
};
//create
const createProduct = async (product) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, price, category, is_popular, img, review) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        product.name,
        product.price,
        product.category,
        product.is_popular,
        product.img,
        product.review,
      ]
    );
    return newProduct;
  } catch (err) {
    return err;
  }
};

//delete
const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products WHERE id=$1 RETURNING *;",
      id
    );
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

//update
const updateProduct = async (id, product) => {
  try {
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, price=$2, category=$3, is_popular=$4, img=$5, review=$6 WHERE id=$7 RETURNING *;",
      [
        product.name,
        product.price,
        product.price,
        product.category,
        product.is_popular,
        product.img,
        product.review,
        id,
      ]
    );
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
