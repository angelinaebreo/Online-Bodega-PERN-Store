// DEPENDENCIES
const db = require("../db/dbConfig.js");

// QUERIES

// index
const getAllReviews = async (productId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE product_id=$1",
      productId
    );
    return allReviews;
  } catch (e) {
    return e;
  }
};

/* SHOW */
const getReview = async (productId, id) => {
  try {
    const oneReview = await db.one(
      "SELECT * FROM reviews WHERE id=$1 AND product_id=$2",
      [id, productId]
    );
    return oneReview;
  } catch (e) {
    return e;
  }
};

// CREATE
const newReview = async (productId, review) => {
  try {
    const newReview = await db.one(
      `
      INSERT INTO reviews
      (reviewer, content, rating, product_id)
      VALUES
      ($1, $2, $3, $4)
      RETURNING *
      `,
      [review.reviewer, review.content, review.rating, productId]
    );
    return newReview;
  } catch (e) {
    return e;
  }
};

/* UPDATE */
const updateReview = async (productId, id, review) => {
  try {
    const updatedReview = await db.one(
      `
      UPDATE reviews
      SET reviewer=$1, content=$2, rating=$3
      WHERE id=$4 AND product_id=$5
      RETURNING *
      `,
      [review.reviewer, review.content, review.rating, id, productId]
    );
    return updatedReview;
  } catch (e) {
    return e;
  }
};

/* DELETE */
const deleteReview = async (productId, id) => {
  try {
    const deletedReview = await db.one(
      `
      DELETE FROM reviews
      WHERE id=$1 AND product_id=$2
      RETURNING *
      `,
      [id, productId]
    );
    return deletedReview;
  } catch (e) {
    return e;
  }
};

// EXPORTS
module.exports = {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
};
