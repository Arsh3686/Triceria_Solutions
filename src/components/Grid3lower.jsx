import { NavLink } from 'react-router-dom';
import './style/Grid3lower.css'

const Grid3lower = () => {
  return (
    <>
      <div className="draganddrop">
        <button><NavLink activeClassName="active" to="/"><h4>Drag and drop</h4></NavLink></button>
      </div>
      <div className="Totals">
        <h3>Total</h3>
        <h3>$15.49</h3>
      </div>
      <div className="Checkout">
        <button><NavLink activeClassName="active" to="/">Checkout</NavLink></button>
      </div>
    </>
  );
};

export default Grid3lower;
