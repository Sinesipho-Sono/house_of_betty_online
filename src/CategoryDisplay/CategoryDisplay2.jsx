import React from "react";
import { Link } from "react-router-dom";
import "./Clothing.css";
export default function CategoryDisplay2() {
  return (
    <div className="CategoryDisplay2">
      <div className="grid grid-cols-2 m-auto p-11 pb-0 pt-2">
        <h3 className="text-left tracking-widest col-start">
          new in date night edition
        </h3>
        <Link to="/DateNightProductCollection" className="text-right col-end">
          shop <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="container  m-auto p-2 flex justify-center mb-1">
        <div className="grid grid-cols-4 gap-4">
          <div className="col">
            <img
              src="/dateNight images/outfit7.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/dateNight images/outfit6.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/dateNight images/outfit2.jpeg"
              alt="dateNight wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/dateNight images/outfit1.jpeg"
              alt="dateNight wear"
              className="aspect-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
