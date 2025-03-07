import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing high-quality services and products to our customers. Our mission is to create lasting relationships through exceptional service.
            </p>
          </div>

         <div className="flex justify-between">
             {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="block py-1 text-gray-400 hover:text-cyan-400">Home</a>
              </li>
              <li>
                <a href="#" className="block py-1 text-gray-400 hover:text-cyan-400">About Us</a>
              </li>
              <li>
                <a href="#" className="block py-1 text-gray-400 hover:text-cyan-400">Team</a>
              </li>
              <li>
                <a href="#" className="block py-1 text-gray-400 hover:text-cyan-400">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Follow Us</h3>
            <div className="flex flex-col gap-4">
              <a href="facebook.com/shuddhangan " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">FaceBook
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">YouTube
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
         </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li><strong>Shuddhangan School</strong> (Jashore)</li>
            <li>Railgate, Sadar, Jashore, Khulna, Dhaka, Bangladesh</li>
            <li>Phone: <a href="tel:+8801972730204" className="text-cyan-400">+880 1972730204</a></li>
            <li>Email: <a href="mailto:shuddhangan@gmail.com" className="text-cyan-400">shuddhangan@gmail.com</a></li>
            <li>Website: <a href="https://udhangan.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400">udhangan.netlify.app</a></li>
            <li>Facebook: <a href="https://facebook.com/shuddhangan" target="_blank" rel="noopener noreferrer" className="text-cyan-400">facebook.com/shuddhangan</a></li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Uddagon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
