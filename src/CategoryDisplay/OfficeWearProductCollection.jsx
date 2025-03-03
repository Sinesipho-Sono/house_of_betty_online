import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../../Footer";
import "./ProductPages.css";

const OfficewearProductCollection = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Black and white office set",
      price: "R350",
      image: "/officeWear images/outfit1.jpeg",
    },
    {
      id: 2,
      name: "White two-piece office set",
      price: "R400",
      image: "/officeWear images/outfit2.jpeg",
    },
    {
      id: 3,
      name: "Pink off shoulder office set",
      price: "R300",
      image: "/officeWear images/outfit3.jpeg",
    },
    {
      id: 4,
      name: "Green jumpsuit office set ",
      price: "R450",
      image: "/officeWear images/outfit4.jpeg",
    },
    {
      id: 5,
      name: "Red two piece office set ",
      price: "R550",
      image: "/officeWear images/outfit5.jpeg",
    },
    {
      id: 6,
      name: "Checkered two-piece set ",
      price: "R450",
      image: "/officeWear images/outfit6.jpeg",
    },
    {
      id: 7,
      name: "Navy office set ",
      price: "R650",
      image: "/officeWear images/outfit7.jpeg",
    },
    {
      id: 8,
      name: "Wide-legged black jumpsuit ",
      price: "R400",
      image: "/officeWear images/outfit8.jpeg",
    },
  ];
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="OfficewearCollection">
          <h1 className="text-center tracking-widest font-bold text-3xl m-5">
            Office wear
          </h1>
          {addedToCart && (
            <div className="view-cart-message">
              <Link to="/CartPage">View Cart</Link>
            </div>
          )}
          <div className="container m-auto p-2 flex justify-center mb-1">
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.id} className="col product-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/5"
                  />
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                      <h2 className="mb-2">{product.name}</h2>

                      <p className="font-bold">{product.price}</p>
                    </div>
                    <div className="col content-end items-end justify-end p-2">
                      <button
                        className="add-cart inline-block "
                        onClick={() => addToCart(product)}
                      >
                        <i className="fas fa-shopping-cart text-2xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficewearProductCollection;
