import React from "react";
import Cards from "./Cards/Cards";
import "./style/Main_body.css";
import { NavLink } from "react-router-dom";
import Grid3 from "./Cards/Grid3";

const Main_body = () => {
  return (
    <>
      <div className="Grid">
        <div className="Grid1">
          <ul>
            <li>
              <a href="/">
                <img src="./images/menu.png" alt="" />
              </a>
              <NavLink to="/home">
                <h1>HOME</h1>
              </NavLink>
            </li>
            <li>
              <a href="/">
                <img src="./images/menu.png" alt="" />
              </a>
              <NavLink to="services">
                <h1>Services</h1>
              </NavLink>
            </li>
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
              <NavLink to="/orders">
                <h1>ORDERS</h1>
              </NavLink>
            </li>
            <li>
              <a href="/">
                <img src="./images/menu.png" alt="" />
              </a>
              <NavLink to="/profile">
                <h1>Profile</h1>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Grid2">
          <div className="sub-Grid1">Sub-Grid1</div>
          <div className="sub-Grid2">
            <Cards />
            {/* <Cards />     */}
          </div>
        </div>
        <div className="Grid3">
        <Grid3 />
        </div>
      </div>
    </>
  );
};

export default Main_body;
