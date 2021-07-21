const db = require("../db/dbConfig.js");

const getAllReviews = async () => {
    try{
        const allReviews = await db.any("SELECT * FROM reviews")
    }catch (e) {
        return e;
    }
};

const getReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview;
    }catch (e) {
        return e;
    }
};

const newReview = async (review) => {
    try {
        const newReview = await db.one(
            `INSERT INTO reviews
            (reviewer, product, content, rating, product_id)
            VALUES 
            ($1, $2, $3, $4, $5)
            RETURNING *
            `,
            [
                review.reviewer,
                review.product,
                review.content,
                review.rating,
                review.product_id,
            ]
        );
        return newReview;
    }catch (e) {
        return e;
    }
};

const updateReview = async (id, review) => {
    try{
        const updatedReview = await db.one(
            `UPDATE reviews SET reviewer=$1, product=$2, content=$3, rating=$4, product_id=$5
            WHERE id=$6
            RETURNING *  
            `,
            [
                review.reviewer,
                review.product,
                review.content,
                review.rating,
                review.product_id,
                id,
            ]
        );

    }catch (e) {
        return e;
    }
};

const deleteReview = async (id) => {
    try{
        const deletedReview = await db.one(
            `DELETE FROM reviews WHERE id=$1 RETURNING *`,id)
            return deleteReview;
    } catch (e) {
        return e;
    }
};

module.exports = {
    getAllReviews,
    getReview,
    newReview,
    updateReview,
    deleteReview,
};