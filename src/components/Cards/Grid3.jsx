import Grid3lower from "../Grid3lower";
import "../style/Grid3.css";
import Grid3middle from "./Grid3middle";

const Grid3 = () => {
  return (
    <>
      <div className="Grid3">
        <div className="upperpart">
          <div className="text">
            <div>
              <h4>My Order</h4>
            </div>
            <div>
              <h4>Edit</h4>
            </div>
          </div>
          <div className="timeanddate">
            <div className="img">
              <img
                src="/images/clock.png"
                width="20px"
                height="20px"
                alt=""
              />
            </div>
            <div className="time">
              <h3>14.30</h3>
            </div>
          </div>
        </div>

        <div className="middlepart">
          <Grid3middle />
          <Grid3middle />
          <Grid3middle />
        </div>
        <div className="lowerpart">
          <Grid3lower />
        </div>
      </div>
    </>
  );
};

export default Grid3;
