import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md border-t-4 border-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="EMCARGO Express" className="h-16" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50"
            >
              Inicio
            </a>
            <a 
              href="#nosotros" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50"
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50"
            >
              Servicios
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50"
            >
              Contacto
            </a>

            <a 
              href="tel:3508255787" 
              className="flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 ml-4"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold text-sm">+57 350 8255787</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a 
            href="#inicio" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </a>
          <a 
            href="#servicios" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </a>
          <a 
            href="#contacto" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
          <a 
            href="tel:3508255787" 
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50 mt-2"
            onClick={() => setIsOpen(false)}
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            <span>+57 350 8255787</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;