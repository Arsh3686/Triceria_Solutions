import React from "react";
import { NavLink } from "react-router-dom";

const Grid1 = () => {
  return (
    <>
      <div className="Grid1">
        <ul>
          <li>
            <a href="/">
              <img src="./images/menu.png" alt="" />
            </a>
            <NavLink to="/restraunt">
              <h1>Restraunt</h1>
            </NavLink>
          </li>
          <li>
            <a href="/">
              <img src="./images/menu.png" alt="" />
            </a>
            <NavLink to="/src/components/Cards/Responsiveorder.jsx">
              <h1>Orders</h1>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Grid1;
