import React, { useState } from "react";

function EditReview({ handleUpdate, index, review, id }) {
  const [editable, setEditable] = useState(false);
  const [edited, setEdited] = useState(review.content);
  const [rating, setRating] = useState(review.rating);

  const handleEdit = (event) => {
    setEdited(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    let copy = { ...review };
    copy.content = edited;
    copy.rating = rating
    handleUpdate(index, copy, id);
    setEditable(false);
    setEdited("");
  };

  return (
    <>
      <button onClick={() => setEditable(!editable)} className="review-button">
        Edit Review
      </button>
      {editable ? (
        <form onSubmit={update} id="edit-review-form">
          <span>
            <label htmlFor="UpdatedRating" className="review-label">
              Rating:
            </label>
            <input
              id="UpdatedRating"
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={handleRating}
            />
          </span>
          <span>
            <label htmlFor="edit-input" className="review-label">
              Comment:
            </label>
            <input
              className="edit-input"
              type="text"
              onChange={handleEdit}
              value={edited}
              required
            ></input>
          </span>
          <button className="review-button">Submit</button>
        </form>
      ) : null}
    </>
  );
}

export default EditReview;
