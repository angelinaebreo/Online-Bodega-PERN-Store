import React from "react";
import axios from "axios";
import apiURL from "../util/apiURL.js";
import { useEffect, useState } from "react";
import product from "./src/components/product.js";

// const API = apiURL();
const Products = ({ products }) => {
  const productList = products.map((elem) => {
    <li key={elem.id}>
      <Product product={elem} />
    </li>;
  });
  return (
    <div>
      <ul>{productList}</ul>
    </div>
  );
};

export default Products;
