// DEPENDENCIES
const express = require("express")
const reviews = express.Router({ mergeParams: true });
const {  getAllReviews,
    getReview,
    newReview,
    updateReview,
    deleteReview } = require("../queries/reviews")

// ROUTES
// index
reviews.get("/", async (req, res) => {
    try {
      const { productId } = req.params;
      const allReviews = await getAllReviews(productId);
      console.log(`controller function call: ${allReviews}`);
      res.status(200).json(allReviews);
    } catch (e) {
      res.status(404).statusMessage(e);
    }
  });

// show
reviews.get("/:id", async (req, res) => {
    try {
      const { productId } = req.params;
      const { id } = req.params;
      const review = await getReview(productId, id);
      res.status(200).json(review);
    } catch (e) {
      res.status(404).statusMessage(e);
    }
  });
  
// create
  reviews.post("/", async (req, res) => {
    try {
      const { productId } = req.params;
      const review = await newReview(productId, req.body);
      res.status(200).json(review);
    } catch (e) {
      res.status(404).statusMessage(e);
    }
  });
  
 // update
  reviews.put("/:id", async (req, res) => {
    try {
      const { productId } = req.params;
      const { id } = req.params;
      const updatedReview = await updateReview(productId, id, req.body);
      res.status(200).json(updatedReview);
    } catch (e) {
      res.status(404).statusMessage(e);
    }
  });
  
 // delete
  reviews.delete("/:id", async (req, res) => {
    try {
      const { productId } = req.params;
      const { id } = req.params;
      const deletedReview = await deleteReview(productId, id);
      res.status(200).json(deletedReview);
    } catch (e) {
      res.status(404).statusMessage(e);
    }
  });
  
  // EXPORTS
  module.exports = reviews;
  