import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./components/Login";
import OfficewearProductCollection from "./CategoryDisplay/OfficeWearProductCollection";
import DateNightProductCollection from "./CategoryDisplay/DateNightProductCollection";
import { CartProvider } from "./components/CartContext";
import CartPage from "./CartPage";
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route
            path="/OfficeWearProductCollection"
            element={<OfficewearProductCollection />}
          />
          <Route
            path="/DateNightProductCollection"
            element={<DateNightProductCollection />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
