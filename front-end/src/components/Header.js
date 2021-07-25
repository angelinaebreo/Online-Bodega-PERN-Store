import React from "react";
import { Link } from "react-router-dom";
import cat from "../assets/cat.png";

function Header() {
  return (
    <div id="header">
      <Link to="/">
        <h1>ONLINE BODEGA</h1>{" "}
      </Link>
      <img src={cat} alt="bodega cat" id="cat-pic" width="200px" />
    </div>
  );
}

export default Header;
