import React, { useState } from "react";

function EditButton({ handleUpdate, index, review, id }) {
  const [editable, setEditable] = useState(false);
  const [edited, setEdited] = useState("");

  const handleEdit = (event) => {
    setEdited(event.target.value);
  };
  const update = (e) => {
    e.preventDefault();
    let copy = {...review}
    copy.content = edited
    handleUpdate(index, copy, id);
    setEditable(false)
    setEdited("");
  };

  return (
     <>
      <button onClick={() => setEditable(!editable)} className="review-button">Edit Review</button>
      {editable ? (
        <form onSubmit={update}>
          <input
            className= "edit-input"
            type="text"
            placeholder={review.content}
            onChange={handleEdit}
            value={edited}
            required
          ></input>
          <button className="sub-review-button">Submit</button>
        </form>
      ) : null}
    </>
  );
}

export default EditButton;
