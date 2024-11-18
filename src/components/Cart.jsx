import React, { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";
import { createOrder } from "../firebase/db";
import { Spinner } from "react-bootstrap";

const Cart = () => {
  const { cart, getTotalPrice } = useCart();
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      customer,
      items: cart.map(({ title, id, quantity, price }) => ({
        title,
        id,
        quantity,
        price,
      })),
      date: new Date().toISOString(),
      total: getTotalPrice(),
    };

    try {
      await createOrder(order);
      setOrderCreated(true);
      console.log("Orden creada exitosamente");
    } catch (error) {
      console.error("Error creando la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (orderCreated) {
    return (
      <div className="container my-4">
        <h2>Pedido Realizado Exitosamente</h2>
        <p>Gracias por tu compra. Tu pedido está siendo procesado.</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Carrito de Compras</h2>
        <p>
          No tienes productos en el carrito. ¡Añade productos para continuar!
        </p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Carrito de Compras</h2>

      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
          >
            <div>
              <h5>{item.title}</h5>
              <small>
                ID: {item.id} - Cantidad: {item.quantity}
              </small>
            </div>
            <span className="fw-bold">
              ${isNaN(item.price) ? "Precio no disponible" : item.price}
            </span>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between">
        <h4>Total: </h4>
        <span className="fw-bold">${getTotalPrice()}</span>
      </div>

      <h4>Información del Cliente</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={customer.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={customer.phone}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Realizar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cart;
