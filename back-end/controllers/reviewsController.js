const express = require('express');
const reviews = express.Router({mergeParams: true});
const {
    getAllReviews,
    getReview,
    newReview,
    updateReview,
    deleteReview,
} = require('../queries/reviews');

//routes
//INDEX
reviews.get("/", async (res) => {
    try {
        const allReviews = await getAllReviews();
        console.log(`controller function call: ${allReviews}`);
        res.status(200).json(allReviews)
    }catch (e) {
        return (e);
        //res.status(404).json({ error: "Resource not found.", message: e });
    }
})
//SHOW
reviews.get("/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const review = await getReview(id);
        res.status(200).json(review);
    }catch (e) {
        return (e);
    }
});

//create
reviews.post('/', async (req, res) => {
    try {
        const review = await newReview(req.body);
        res.status(200).json(review);
    }catch (e) {
        return (e);
       // res.status(404).json({ error: "Resource not found.", message: e });
    }
});

//update
reviews.put("/:id", async (req, res) => {
    try {
        const { id } =req.params;
        const updatedReview = await updateReview(id, req.body);
        res.status(200).json(updatedReview);
    }catch (e) {
        return (e);
        //res.status(404).json({ error: "Resource not found.", message: e });
    }
});

//delete
reviews.delete("/:id", async (req,res) => {
    try {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    res.status(200).json(deletedReview);
    }catch (e) {
        return (e);
        //res.status(404).json({ error: "Resource not found.", message: e });
   }
});

module.exports = reviews;