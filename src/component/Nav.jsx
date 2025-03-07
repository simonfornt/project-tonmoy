import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-100 text-Black">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">Uddagon</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <ul className="flex gap-8 items-center font-semibold">
            <li>
              <a href="#" className="hover:text-cyan-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Team</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Contact Us</a>
            </li>
          </ul>

          <div className="gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-md">Login</button>
            
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 py-4`}>
        <ul className="text-center text-white font-semibold">
          <li>
            <a href="#" className="block py-2 hover:text-cyan-400">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-cyan-400">About Us</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-cyan-400">Team</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-cyan-400">Contact Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
