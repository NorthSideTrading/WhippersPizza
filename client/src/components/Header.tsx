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
      <nav aria-label="Main" className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[hsl(196,100%,47%)] hover:text-[hsl(196,100%,40%)] transition-colors">
          Whippers Pizza
        </Link>
        
        <button 
          className="md:hidden text-[hsl(220,13%,18%)] focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <div className={`nav-links w-full md:w-auto md:flex items-center ${isOpen ? 'open' : ''}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link 
                href="/" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/' ? 'text-[hsl(196,100%,47%)] font-semibold' : 'hover:text-[hsl(196,100%,47%)]'}`}
              >
                Home
                {location === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(196,100%,47%)]"></span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/about' ? 'text-[hsl(196,100%,47%)] font-semibold' : 'hover:text-[hsl(196,100%,47%)]'}`}
              >
                About
                {location === '/about' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(196,100%,47%)]"></span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/menu' ? 'text-[hsl(196,100%,47%)] font-semibold' : 'hover:text-[hsl(196,100%,47%)]'}`}
              >
                Menu
                {location === '/menu' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(196,100%,47%)]"></span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/contact' ? 'text-[hsl(196,100%,47%)] font-semibold' : 'hover:text-[hsl(196,100%,47%)]'}`}
              >
                Contact
                {location === '/contact' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(196,100%,47%)]"></span>}
              </Link>
            </li>
            <li className="md:ml-4">
              <Link 
                href="/contact" 
                className="mt-4 md:mt-0 block py-2 px-6 bg-[hsl(3,92%,51%)] hover:bg-[hsl(3,92%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
