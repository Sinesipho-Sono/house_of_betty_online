import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          House of Betty
        </a>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </li>

          <li className="relative group">
            <button
              className="flex items-center text-gray-600 hover:text-blue-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products <FiChevronDown className="ml-1" />
            </button>

            <ul
              className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 ${
                dropdownOpen ? "block" : "hidden"
              } md:group-hover:block`}
            >
              <li>
                <a
                  href="/products/men"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="/products/women"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="/products/kids"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="/products/accessories"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-100 py-4 space-y-4">
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
              Products <FiChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <ul className="flex flex-col items-center bg-white shadow-md rounded-lg py-2 w-40 mt-2">
                <li>
                  <a
                    href="/products/men"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="/products/women"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="/products/kids"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kids
                  </a>
                </li>
                <li>
                  <a
                    href="/products/accessories"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
