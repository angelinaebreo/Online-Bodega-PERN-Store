import React from "react";
import Product from "./Product.js";

function Products  ({ products }) {

  return (
    <div className="products-container">
      <ul className="products-list">
        {products.map(elem => <li key={elem.id}><Product product={elem} /></li>)}
    </ul>
    </div>
  );
};

export default Products;
