import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://localhost:3000/" className="nav-links">
            WALK THE AISLES
          </a>
        </li>
        <li className="divider">&#9830;</li>
        <li>
          <a href="http://localhost:3000/" className="nav-links">
            ADD PRODUCT TO INVENTORY
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
