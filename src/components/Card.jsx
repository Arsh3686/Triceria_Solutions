import "./style/Card.css";

const Card = ({ states }) => {
  const added = () => {
    const addbtn = document.querySelector(".add");
    addbtn.src = "/images/checked.png";
  };

  const liked = () => {
    const image = document.querySelector("#image");
    console.log("clicked firstly");
    image.src = "/images/redheart.png";
    console.log("clicked first");
  };
  return (
    <>
      {states.map((elem) => { //we can also use object destructuring here
        return (
          <>
            <div className="sub-Grid2_1" key={elem.name}>
              <div className="card_divide1">
                <div className="rating">
                  <h5>⭐</h5>
                  <h4 className="h4">{elem.rating}</h4>
                </div>
                <div className="heart">
                  <h4>
                    <img onClick={liked} id="image" src={elem.heart} alt="" />
                  </h4>
                </div>
              </div>
              <div className="card_divide2">
                <div className="img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="details">
                  <div className="nameandweight">
                    <div>
                      <h3>{elem.name}</h3>
                    </div>
                    <div className="weight">
                      <h5>{elem.weight}</h5>
                    </div>
                  </div>
                  <div className="price">
                    <div className="prices">
                      <h4>{elem.price}</h4>
                    </div>
                    <div className="button">
                      <img
                        onClick={added}
                        className="add"
                        src="/images/add.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Card;
