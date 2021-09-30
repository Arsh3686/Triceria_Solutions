import React from "react";
import Cards from "./Cards/Cards";
import "./style/Main_body.css";
import Grid3 from "./Cards/Grid3";
import Grid1 from "./Cards/Grid1";

const Main_body = () => {
  return (
    <>
      <div className="Grid">
        <Grid1 />
        <div className="Grid2">
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
