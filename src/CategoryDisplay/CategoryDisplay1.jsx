import React from "react";
import { Link } from "react-router-dom";
import "./Clothing.css";
export default function CategoryDisplay1() {
  return (
    <div className="CategoryDisplay1">
      <div className="grid grid-cols-2 m-auto p-11 pb-0 pt-2">
        <h3 className="text-left tracking-widest col-start">
          new in office wear
        </h3>
        <Link to="/OfficeWearProductCollection" className="text-right col-end">
          shop <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="container  m-auto p-2 flex justify-center mb-1">
        <div className="grid grid-cols-4 gap-4">
          <div className="col">
            <img
              src="/officeWear images/outfit1.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/officeWear images/outfit2.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/officeWear images/outfit3.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
          <div className="col">
            <img
              src="/officeWear images/outfit4.jpeg"
              alt="office wear"
              className="aspect-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
