import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

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
        const { data } = response;

        let average = data.reduce((a, b) => { return Number(a) + Number(b.rating);}, 0) / data.length;
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
      })
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    try {
      axios.get(`${api}/products/${id}`).then(
        (response) => {
          setProduct(response.data);
        },
        (error) => console.log("get", error)
      );
    } catch (error) {
      console.warn("catch", error);
    }
  }, [id]);

  const handleInput = (event) => {
    setReview({ ...newReview, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${api}/products/${id}/reviews`, newReview).then((response) => {
      let stars = "";
      for (let i = 0; i < newReview.rating; i++) {
        stars += "⭐";
      }
      newReview.stars = stars;
      setReviews([...reviews, newReview]);
    });
  };

  return (
    <div>
      <div>
        <h1>
          {product.name} {average}
        </h1>
        {product.is_popular ? <p>Best Seller 💫</p> : null}

        <img src={product.img} alt={product.name} />
      </div>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" />
      </form>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.reviewer}</p>
            <p>{review.stars}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
