import React from "react";
import { Link } from "react-router-dom";

function CategoryBanner() {
  return (
    <div id="banner">
      <ul id="banner-list">
        <li className="divider first-div">&#9830;</li>

        <li className="banner-item">
          <Link to="/products/bevs">BEVERAGES</Link>
        </li>
        <li className="divider">&#9830;</li>

        <li className="banner-item">
          <Link to="/products/snacks">SNACKS</Link>
        </li>
        <li className="divider">&#9830;</li>

        <li className="banner-item">
          <Link to="/products/sandwiches">SANDWICHES</Link>
        </li>
        <li className="divider">&#9830;</li>

        <li className="banner-item">
          <Link to="/products/misc">MISC.</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryBanner;
