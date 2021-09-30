import { useState } from "react"

const Grid3middle = () => {
const [state,setState]=useState(1)
    return (
        <>
             <div className="itemsorderlayout">
            <div className="imgmnameandweight">
              <div>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className="mnameandweight">
                <h3>Bean Soup</h3>
                <h5>350g</h5>
              </div>
            </div>

            <div className="addorremove">
              <button className="minus" onClick={()=>setState(state-1)}><h4>-</h4></button>
              <button className="noofitems"><h4>{state}</h4></button>
              <button className="plus" onClick={()=>setState(state+1)}><h4>+</h4></button>
            </div>
            <div className="price">$4.20</div>
            <div className="remove">*</div>
          </div>
        </>
    )
}

export default Grid3middle
