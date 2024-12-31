import { useState } from "react";
import {
  Menu,
} from "lucide-react";

const Navbar = ({ setCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          <a href="#" className="text-lg font-bold text-white">
            News Point
          </a>
        </div>

        <div className="hidden lg:flex space-x-6">
          <button
            onClick={() => setCategory("technology")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
           
            <span>Technology</span>
          </button>
          <button
            onClick={() => setCategory("business")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
           
            <span>Business</span>
          </button>
          <button
            onClick={() => setCategory("health")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
    
            <span>Health</span>
          </button>
          <button
            onClick={() => setCategory("science")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
            {/* <Flask size={20} /> */}
            <span>Science</span>
          </button>
          <button
            onClick={() => setCategory("sports")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
            {/* <Football size={20} /> */}
            <span>Sports</span>
          </button>
          <button
            onClick={() => setCategory("entertainment")}
            className="hover:text-gray-400 flex items-center space-x-1"
          >
           
            <span>Entertainment</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="space-y-2 px-4 py-2">
            <button
              onClick={() => setCategory("all categories")}
              className="block text-white hover:text-gray-400"
            >
              Latest
            </button>
            <button
              onClick={() => setCategory("technology")}
              className="block text-white hover:text-gray-400  items-center space-x-1"
            >
              
              <span>Technology</span>
            </button>
            <button
              onClick={() => setCategory("business")}
              className="block text-white hover:text-gray-400  items-center space-x-1"
            >
           
              <span>Business</span>
            </button>
            <button
              onClick={() => setCategory("health")}
              className="block text-white hover:text-gray-400  items-center space-x-1"
            >
              
              <span>Health</span>
            </button>
            <button
              onClick={() => setCategory("science")}
              className="block text-white hover:text-gray-400  items-center space-x-1"
            >

              <span>Science</span>
            </button>
            <button
              onClick={() => setCategory("sports")}
              className="block text-white hover:text-gray-400  items-center space-x-1"
            >

              <span>Sports</span>
            </button>
            <button
              onClick={() => setCategory("entertainment")}
              className="block text-white hover:text-gray-400 md:items-center items-center space-x-1"
            >
            
              <span>Entertainment</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
