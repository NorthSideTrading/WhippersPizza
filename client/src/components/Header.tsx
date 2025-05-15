import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav aria-label="Main" className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#B71C1C]">
          Whippers Pizza
        </Link>
        
        <button 
          className="md:hidden text-text-dark focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className={`nav-links w-full md:w-auto md:flex items-center ${isOpen ? 'open' : ''}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link 
                href="/" 
                className={`block py-2 transition-colors duration-200 ${location === '/' ? 'text-[#B71C1C] font-bold' : 'hover:text-[#B71C1C]'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 transition-colors duration-200 ${location === '/about' ? 'text-[#B71C1C] font-bold' : 'hover:text-[#B71C1C]'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className={`block py-2 transition-colors duration-200 ${location === '/menu' ? 'text-[#B71C1C] font-bold' : 'hover:text-[#B71C1C]'}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block py-2 transition-colors duration-200 ${location === '/contact' ? 'text-[#B71C1C] font-bold' : 'hover:text-[#B71C1C]'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
