import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import EditReview from "./EditReview";

const api = apiURL();

function Reviews() {
  let { id } = useParams();
  const [average, setAverage] = useState("");
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [newReview, setReview] = useState({
    reviewer: "",
    content: "",
    rating: 1,
    product_id: id,
  });

  useEffect(() => {
    axios
      .get(`${api}/products/${id}/reviews`)
      .then((response) => {
        const data = response.data.payload;
        setStars(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${api}/products/${id}`)
      .then(
        (response) => {
          setProduct(response.data.payload);
        },
        (error) => console.log("get", error)
      )
      .catch((e) => console.log(e));
  }, [id]);

  const setStars = (data) => {
    let average =
      data.reduce((a, b) => {
        return Number(a) + Number(b.rating);
      }, 0) / data.length;
    let stars = "";
    for (let i = 0; i < average; i++) {
      stars += "⭐";
    }
    setAverage(stars);

    let dataCopy = [...data];
    for (let point of dataCopy) {
      let stars = "";
      for (let i = 0; i < point.rating; i++) {
        stars += "⭐";
      }
      point.stars = stars;
    }

    setReviews(dataCopy);
  };

  const handleInput = (event) => {
    setReview({ ...newReview, [event.target.id]: event.target.value });
  };

  const handleUpdate = (index, edited, reviewId) => {
    axios
      .put(`${api}/products/${id}/reviews/${reviewId}`, edited)
      .then((response) => {
        let stars = "";
        for (let i = 0; i < edited.rating; i++) {
          stars += "⭐";
        }
        edited.stars = stars;
        const reviewsCopy = [...reviews];
        reviewsCopy[index] = edited;

        let average =
          reviewsCopy.reduce((a, b) => {
            return Number(a) + Number(b.rating);
          }, 0) / reviewsCopy.length;

        stars = "";
        for (let i = 0; i < average; i++) {
          stars += "⭐";
        }
        setAverage(stars);

        setReviews(reviewsCopy);
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (index, reviewId) => {
    axios
      .delete(`${api}/products/${id}/reviews/${reviewId}`)
      .then((response) => {
        const reviewsCopy = [...reviews];
        reviewsCopy.splice(index, 1);
        setReviews(reviewsCopy);
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${api}/products/${id}/reviews`, newReview).then((response) => {
      axios
        .get(`${api}/products/${id}/reviews`)
        .then((response) => {
          const data = response.data.payload;
          setStars(data);
          setReviews(response.data.payload);
        })
        .catch((e) => console.log(e));

      setReview({ reviewer: "", content: "", rating: 1, product_id: id });
    });
  };

  return (
    <div id="review-container">
      <div>
        <h1>
          {product.name} {average}
        </h1>
        {product.is_popular ? <p className="best">Best Seller 💫</p> : null}

        <img src={product.img} alt={product.name} className="review-pic" />
      </div>
      <form onSubmit={handleSubmit} id="review-form">
        <label htmlFor="content">Leave a review:</label>
        <textarea
          id="content"
          onChange={handleInput}
          value={newReview.content}
          required
        ></textarea>
        <label htmlFor="reviewer">Name:</label>
        <input
          type="text"
          id="reviewer"
          value={newReview.reviewer}
          onChange={handleInput}
          required
        />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={handleInput}
        />
        <button type="submit" id="submit-review">
          Submit Review
        </button>
      </form>
      <h1 id="reviews">Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={review.id} id="review">
            <p className="reviewer">{review.reviewer}</p>
            <p>{review.stars}</p>
            <p>{review.content}</p>
            <div>
              <EditReview
                handleUpdate={handleUpdate}
                review={review}
                index={index}
                id={review.id}
              />
              <button
                onClick={() => handleDelete(index, review.id)}
                className="review-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
