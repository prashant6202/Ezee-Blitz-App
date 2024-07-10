import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function cartButton() {
  const nav = useNavigate();
  const handleCartNavigation = () => {
    nav("/cart");
  };
  const { cartItems } = useSelector((state) => state.cart);
  const bgColorName = cartItems.length === 0 ? "none" : "white";
  return (
    <div>
      <button
        onClick={handleCartNavigation}
        className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
      >
        <i className="bi bi-cart3"></i>
        <span className="mx-2">Checkout</span>
        <span className={`badge text-success bg-${bgColorName}`}>
          {cartItems.length}
        </span>
      </button>
    </div>
  );
}
