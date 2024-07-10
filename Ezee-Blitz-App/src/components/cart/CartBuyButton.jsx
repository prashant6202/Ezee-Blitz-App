import React from "react";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function CartBuyButton() {
  const nav = useNavigate();
  const buy = async () => {
    const result = await swal.fire({
      title: "Do you want to place the order ?",
      showDenyButton: true,
      confirmButtonText: "Place Order",
      denyButtonText: "Dont't Place",
    });

    if (result.isConfirmed) {
      await swal.fire({
        title: "Done",
        text: "Order placed successfully",
        icon: "success",
      });
      nav("/");
      window.location.reload();
    } else if (result.isDenied) {
      await swal.fire({
        title: "Order not placed",
        text: "",
        icon: "info",
      });
    }
  };
  return (
    <button
      onClick={buy}
      className="btn btn-success d-block w-100 fw-bold mt-3"
    >
      By Now
    </button>
  );
}
