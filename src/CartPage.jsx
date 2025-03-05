import React, { useState } from "react";
import { useCart } from "./components/CartContext";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "../Footer";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = cart.length > 0 ? 200 : 0;
  const total = subtotal + shippingCost;

  const handleInputChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="cart">
          <h2 className="text-center tracking-widest font-bold text-3xl m-5">
            Your Cart
          </h2>
          {cart.length === 0 ? (
            <p className="text-center items-center">
              Your cart is empty.{" "}
              <Link to="/" className="text-pink-dark">
                Go back to shopping{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </p>
          ) : (
            <div class="grid grid-cols-3 gap-4">
              <div className="col-span-2 xs:col">
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center m-6 gap-10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="aspect-2/3 w-24 h-24 object-cover"
                      />
                      <p>
                        {item.name} - R{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-3 py-1 bg-pink rounded-lg"
                        >
                          -
                        </button>
                        <span className="text-lg text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-3 py-1 bg-pink rounded-lg"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-pink rounded-2xl p-3"
                      >
                        <i className="fas fa-trash-alt"></i> Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col items-center justify-center pr-10 m-0">
                <p className="text-end items-end pr-4 ">
                  <Link to="/" className="text-pink-dark ">
                    Go back to shopping{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </p>
                <div className="mt-2 bg-pink p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Order Summary</h3>
                  <p className="mt-2">
                    Subtotal:{" "}
                    <span className="font-bold ">R{subtotal.toFixed(2)}</span>
                  </p>
                  <p>
                    Shipping:{" "}
                    <span className="font-bold">
                      {cart.length > 0 ? "R200.00" : "Free"}
                    </span>
                  </p>
                  <p className="text-2xl font-bold mt-2">
                    Total: R{total.toFixed(2)}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-center">
                    Shipping Details
                  </h3>
                  <form className="bg-pink p-6 rounded-lg shadow-md mt-3">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full p-2  rounded mb-3 bg-white shadow-md"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="w-full p-2  rounded mb-3 bg-white shadow-md"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="w-full p-2  rounded mb-3 bg-white shadow-md"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      className="w-full p-2  rounded mb-3 bg-white shadow-md"
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
                <div className="m-4 text-center">
                  <button className=" bg-pink text-black hover:bg-pink-dark p-3 mt-6 rounded-lg shadow-lg">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
