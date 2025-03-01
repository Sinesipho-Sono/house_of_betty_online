import React from "react";
import CategoryDisplay1 from "./CategoryDisplay/CategoryDisplay1";
import ClothingDisplay from "./CategoryDisplay/ClothingDisplay";

export default function Homepage() {
  return (
    <div>
      <CategoryDisplay1 />
      <ClothingDisplay />
    </div>
  );
}
