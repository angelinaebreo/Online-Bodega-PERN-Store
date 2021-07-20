// DEPENDENCIES
const express = require("express");
const products = express.Router({ mergeParams: true });

const db = require("../db/dbConfig.js");

// DELETE
const deleteProduct = async (id) => {
    try {
      const deleted = await db.one(
        "DELETE FROM products WHERE id=$1 RETURNING *;",
        id
      );
      return deleted;
    } catch (e) {
      return e;
    }
  };
  
  // UPDATE
  const updateProduct= async (id, product) => {
    try {
      return await db.one(
        "UPDATE products SET name = $1, price = $2, category = $3, is_popular = $4, img = $5, review = $6 WHERE id=$7 RETURNING *;",
        [product.name, product.price, product.category, product.is_popular, product.img, product.review, id]
      );
    } catch (e) {
      return e;
    }
  };

  module.exports = {
   
    deleteBookmark,
    updateBookmark
  };