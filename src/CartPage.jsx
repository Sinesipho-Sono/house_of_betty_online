import React from "react";
import { useCart } from "./components/CartContext";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "../Footer";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="cart">
          <h2 className="text-center tracking-widest font-bold text-3xl m-5">
            Your Cart
          </h2>
          {cart.length === 0 ? (
            <p className="text-center">
              Your cart is empty.{" "}
              <Link to="/" className="text-pink-dark">
                Go back to shopping{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex items-center m-6 gap-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-2/3 w-24 h-24 object-cover"
                  />
                  <p>
                    {item.name} - {item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-pink rounded-2xl p-3"
                  >
                    <i className="fas fa-trash-alt"></i> Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
