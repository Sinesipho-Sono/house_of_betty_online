import React from "react";
import CategoryDisplay1 from "./CategoryDisplay/CategoryDisplay1";
import CategoryDisplay2 from "./CategoryDisplay/CategoryDisplay2";
import ClothingDisplay from "./CategoryDisplay/ClothingDisplay";
import Navbar from "./components/Navbar";
import Footer from "../Footer";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <CategoryDisplay2 />
        <CategoryDisplay1 />
        <ClothingDisplay />
      </main>

      <Footer />
    </div>
  );
}
