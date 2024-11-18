import React, { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, addToCart } = useCart();
  const [productCount, setProductCount] = useState(0);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: "New Product" };
    addToCart(newProduct);
  };

  useEffect(() => {
    setProductCount(cart.length);
  }, [cart]);

  return (
    <div className="d-flex align-items-center p-2">
      <i
        className="bi bi-cart3"
        style={{ fontSize: "1.5rem", color: "white" }}
      ></i>
      <span className="ms-2" style={{ color: "white" }}>
        {productCount}
      </span>

      <button className="btn btn-primary ms-3" onClick={addProduct}>
        Add Product
      </button>

      <Link to="/cart" className="btn btn-secondary ms-3">
        Go to Cart
      </Link>
    </div>
  );
};

export default CartWidget;
