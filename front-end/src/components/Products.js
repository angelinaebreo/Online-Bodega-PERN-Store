import React from "react";
import axios from "axios";
import apiURL from "../util/apiURL.js";
import { useEffect, useState } from "react";

const API = apiURL()
const Products = () => {
    const [products, setProducts] = ''
  useEffect(() => {
      try {
          axios
              .get(`${API}/products`)
              .then(
                  (response) => {setProducts(response.data) },
        (error) => console.log("get", error)
      );
    } catch (error) {
      console.warn("catch", error);
    }
  }, []);
  return <div>{products}</div>;
};

export default Products;

