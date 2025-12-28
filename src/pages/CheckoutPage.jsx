import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/main.css";

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Pago realizado con éxito! Gracias por tu compra.");
    clearCart();
    navigate("/home");
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1 className="heading-1">Checkout</h1>
        <p>No hay productos en el carrito.</p>
        <button className="btn btn--primary" onClick={() => navigate("/home")}>
          Volver a la inicio
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="heading-1">Finalizar Compra</h1>
      <div className="checkout-page__container">
        <div className="checkout-page__summary">
          <h2 className="heading-2">Resumen del Pedido</h2>
          <ul className="checkout-page__list">
            {cart.map((item) => (
              <li key={item.id} className="checkout-page__item">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-page__total">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </div>

        <form className="checkout-page__form" onSubmit={handleSubmit}>
          <h2 className="heading-2">Datos de Envío</h2>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <textarea
              id="address"
              name="address"
              className="form-input"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
