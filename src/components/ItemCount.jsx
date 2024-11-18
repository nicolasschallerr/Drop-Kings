import React, { useState, useContext } from "react";
import { cartContext } from "../context/cartContext";

function ItemCount(detail) {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count > 0 ? count - 1 : 0);
  const handleAddToCart = () => addToCart({ ...detail, qty: count });
  const { addToCart } = useContext(cartContext);
  return (
    <div className="d-flex align-items-center">
      <button onClick={handleSub} className="btn btn-outline-secondary">
        -
      </button>
      <span className="mx-2">{count}</span>
      <button onClick={handleAdd} className="btn btn-outline-secondary">
        +
      </button>
      <button onClick={handleAddToCart} className="btn btn-primary ms-3">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCount;
