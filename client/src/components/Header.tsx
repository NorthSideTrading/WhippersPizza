import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Close mobile menu when changing pages
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside and handle body scrolling
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling of the background when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-white shadow-md py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/whippers-logo.png" 
              alt="Whippers Pizza Logo" 
              className="h-16 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  href="/" 
                  className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
                >
                  Home
                  {location === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/about' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
                >
                  About
                  {location === '/about' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/menu' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
                >
                  Menu
                  {location === '/menu' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/contact' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
                >
                  Contact
                  {location === '/contact' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
                </Link>
              </li>
              <li className="ml-4">
                <Link 
                  href="/contact" 
                  className="block py-2 px-6 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[hsl(212,40%,18%)] focus:outline-none z-50"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - outside of the container for full width */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 md:hidden">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className={`block py-3 px-2 text-lg ${location === '/' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`block py-3 px-2 text-lg ${location === '/about' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className={`block py-3 px-2 text-lg ${location === '/menu' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`block py-3 px-2 text-lg ${location === '/contact' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-200">
                <Link 
                  href="/contact" 
                  className="block py-3 px-6 bg-[hsl(145,63%,49%)] text-white font-semibold rounded-lg text-center text-lg"
                  onClick={toggleMenu}
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
