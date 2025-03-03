import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-pink shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          House of Betty
        </a>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Dresses
            </a>
          </li>

          <li className="relative group">
            <button
              className="flex items-center text-gray-600 hover:text-blue-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Collections <FiChevronDown className="ml-1" />
            </button>

            <ul
              className={`absolute left-0 mt-2 bg-pink shadow-lg rounded-lg py-2 w-40 ${
                dropdownOpen ? "block" : "hidden"
              } md:group-hover:block`}
            >
              <li>
                <Link
                  to="/OfficeWearProductCollection"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Office wear
                </Link>
              </li>
              <li>
                <a
                  href="/collections/dateNight"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Date night edition
                </a>
              </li>
              <li>
                <a
                  href="/collections/lounge"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Lounge wear
                </a>
              </li>
              <li>
                <a
                  href="/collections/modest"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Modest outfits
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/Clothing" className="text-gray-600 hover:text-blue-500">
              Clothing
            </a>
          </li>
        </ul>
        <div className="content-end flex space-x-4">
          <div className="col">
            <Link to="/Login" className="text-black hover:text-blue-500">
              <FaUser size={20} />
            </Link>
          </div>
          <div className="col">
            <div className="relative flex items-center">
              <Link to="/CartPage" className="cart-link">
                <i className="fas fa-shopping-cart text-xl">
                  {cart.length > 0 && (
                    <span className="cart-count absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-black bg-pink rounded-full">
                      {cart.length}
                    </span>
                  )}
                </i>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-pink py-4 space-y-4">
          <li>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </li>

          <li className="relative">
            <button
              className="text-gray-600 hover:text-blue-500 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Collections <FiChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <ul className="flex flex-col items-center bg-pink shadow-md rounded-lg py-2 w-40 mt-2">
                <li>
                  <a
                    href="/OfficeWearProductCollection"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Office wear
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/dateNight"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Date night edition
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/loungeWear"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Lounge wear
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/modest"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Modest outfits
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/clothing" className="text-gray-600 hover:text-blue-500">
              Clothing
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
