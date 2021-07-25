import React from "react";
import { useState } from "react";

const NewProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    is_popular: false,
    img: "",
  });


  const handleChange_input = (e) => {
    const { value } = e.target;
    setProduct({ ...product, [e.target.id]: value });
  };
  const handleChange_is_popular = (e) => {
    setProduct({ ...product, is_popular: !product.is_popular });
  };
  const handleChange_category = (e) => {
    const { value } = e.target;
    setProduct({ ...product, category: value });
  };

  const handleNum_input = (e) => {
    const { value } = e.target;
    let num = Number(value);
    setProduct({ ...product, price: num });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prod = {
      ...product,
      name: product.name[0].toUpperCase() + product.name.slice([1]),
    };
    addProduct(prod);
  };
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleChange_input}
          placeholder="Product Name"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={product.price}
          placeholder="Price"
          onChange={handleNum_input}
          required
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={product.category}
          onChange={handleChange_category}
          required
        >
            <option></option>
          <option value="Beverage">Beverages</option>
          <option value="Mischellaneous">Miscellaneous</option>
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
          onChange={handleChange_input}
        />

        <label htmlFor="is_popular">Popular?</label>
        <input
          id="is_popular"
          type="checkbox"
          onChange={handleChange_is_popular}
          checked={product.is_popular}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
