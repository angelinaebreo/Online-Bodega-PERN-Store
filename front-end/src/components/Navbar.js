import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/products" className="nav-links">
            WALK THE AISLES
          </Link>
        </li>

        <li className="divider">&#9830;</li>

        <li>
          <Link to="/new" className="nav-links">
            ADD PRODUCT TO INVENTORY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
