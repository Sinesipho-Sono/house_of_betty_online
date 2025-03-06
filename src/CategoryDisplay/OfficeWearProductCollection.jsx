import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../../Footer";
import "./ProductPages.css";

const OfficewearProductCollection = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
  };

  const filteredProducts = products.filter((product) => {
    return category === "all" || product.category === category;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLow") return a.price - b.price;
    if (sortOption === "priceHigh") return b.price - a.price;
    if (sortOption === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="OfficewearCollection">
          <h1 className="text-center tracking-widest font-bold text-3xl m-5">
            Office Wear
          </h1>

          <div className="flex justify-between items-center px-4 mb-4">
            <select
              className="border p-2 rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="set">Sets</option>
              <option value="jumpsuit">Jumpsuits</option>
              <option value="co-ord">Co-ords</option>
            </select>

            <select
              className="border p-2 rounded border:bg-gray"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          <div className="container m-auto p-2 flex justify-center mb-1">
            <div className="grid grid-cols-4 gap-4">
              {sortedProducts.map((product) => (
                <div key={product.id} className="col product-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/5"
                  />
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                      <h2 className="mb-2">{product.name}</h2>
                      <p className="font-bold">R{product.price}</p>
                    </div>
                    <div className="col content-end items-end justify-end p-2">
                      <button
                        className="add-cart inline-block"
                        onClick={() => handleAddToCart(product)}
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
