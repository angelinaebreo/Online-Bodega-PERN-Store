import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function EditForm({ updateProduct }) {
  let { id } = useParams();
  let history = useHistory();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    is_popular: false,
    img: "",
  });

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleNumChange = (e) => {
    let price = Number(e.target.value);
    setProduct({ ...product, price: price });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, is_popular: !product.is_popular });
  };

  const selectChange = (event) => {
    setProduct({ ...product, category: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => {
        const { payload } = response.data;
        payload.price = Number(payload.price);
        setProduct(payload);
      },
      (error) => history.push(`/404`)
    );
  }, [id, history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Product"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={product.price}
          placeholder="Price"
          onChange={handleNumChange}
          required
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={product.category}
          onChange={selectChange}
          required
        >
          <option></option>
          <option value="Beverage">Beverages</option>
          <option value="Misc">Miscellaneous</option>
          <option value="Sandwich">Sandwiches</option>
          <option value="Snacks">Snacks</option>
        </select>

        <label htmlFor="img">Image Link:</label>
        <input
          id="img"
          type="text"
          pattern="http[s]*://.+"
          required
          value={product.img}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <label htmlFor="is_popular">Popular?</label>
        <input
          id="is_popular"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.is_popular}
        />
        <br />
        <button type="submit"> Submit </button>
        <br />
        <Link to={`/products/${id}`}>
          <button>Back to Product</button>
        </Link>
      </form>
    </div>
  );
}

export default EditForm;
