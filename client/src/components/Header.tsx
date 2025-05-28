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
                  className={`flex items-center py-2 px-1 relative transition-colors duration-200 ${location === '/' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'hover:text-[hsl(5,65%,40%)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                  {location === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(5,65%,40%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className={`flex items-center py-2 px-1 relative transition-colors duration-200 ${location === '/menu' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'hover:text-[hsl(5,65%,40%)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Menu
                  {location === '/menu' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(5,65%,40%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className={`flex items-center py-2 px-1 relative transition-colors duration-200 ${location === '/gallery' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'hover:text-[hsl(5,65%,40%)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Gallery
                  {location === '/gallery' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(5,65%,40%)]"></span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`flex items-center py-2 px-1 relative transition-colors duration-200 ${location === '/about' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'hover:text-[hsl(5,65%,40%)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                  {location === '/about' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(5,65%,40%)]"></span>}
                </Link>
              </li>
              <li className="ml-4">
                <a 
                  href="tel:+12076221471" 
                  className="flex items-center py-2 px-6 bg-[hsl(5,65%,40%)] hover:bg-[hsl(5,65%,35%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[hsl(212,40%,18%)] focus:outline-none z-[70] relative"
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
        <div className="fixed inset-0 bg-white z-[60] pt-20 md:hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <ul className="flex flex-col space-y-4 mt-8">
              <li>
                <Link 
                  href="/" 
                  className={`flex items-center py-3 px-2 text-lg ${location === '/' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className={`flex items-center py-3 px-2 text-lg ${location === '/menu' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className={`flex items-center py-3 px-2 text-lg ${location === '/gallery' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`flex items-center py-3 px-2 text-lg ${location === '/about' ? 'text-[hsl(5,65%,40%)] font-semibold' : 'text-[hsl(212,40%,18%)]'}`}
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="tel:+12076221471" 
                  className="flex items-center justify-center py-3 px-6 bg-[hsl(5,65%,40%)] text-white font-semibold rounded-lg text-lg"
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
