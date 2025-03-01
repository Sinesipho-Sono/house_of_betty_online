import React from "react";

export default function ClothingDisplay() {
  return (
    <div className="ClothingDisplay">
      <div className="grid grid-cols-2 m-auto p-11 pb-0  pt-2">
        <h3 className="text-left tracking-widest col-start">
          shop by category
        </h3>
        <a href="" className="text-right col-end">
          shop <i className="fa-solid fa-chevron-right"></i>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8 pt-1 max-w-5xl m-auto">
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img
              src="/ClothingDisplay/tops.jpeg"
              alt="tops"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-opacity  text-black font-bold p-2 text-center">
              Tops
            </div>
          </div>
          <div className="relative">
            <img
              src="/ClothingDisplay/skirts.jpeg"
              alt="skirts"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-opacity  text-black font-bold p-2 text-center">
              Skirts
            </div>
          </div>
        </div>
        <div className="relative col-span-1">
          <img
            src="/ClothingDisplay/co-ords.jpeg"
            alt="co-ords"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-opacity  text-black font-bold p-2 text-center">
            Co-ords
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img
              src="/ClothingDisplay/office wear.jpeg"
              alt="office wear"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-opacity  text-black font-bold p-2 text-center">
              Office wear
            </div>
          </div>
          <div className="relative">
            <img
              src="/ClothingDisplay/dresses.jpeg"
              alt="dresses"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-opacity  text-black font-bold p-2 text-center">
              Dresses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
