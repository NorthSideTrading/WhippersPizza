import { useEffect, useState } from 'react';
import { Link } from 'wouter';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1B2A41] text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Contact Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img 
              src="/images/whippers-logo.png" 
              alt="Whippers Pizza Logo" 
              className="h-28 w-auto mb-6" 
            />
            <address className="not-italic mb-4 text-white">
              9 Bangor St<br />
              Augusta, ME 04330-4701
            </address>
            <p className="mb-2">
              <a 
                href="tel:+12076221471" 
                className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (207) 622-1471
              </a>
            </p>
            <p>
              <a 
                href="mailto:whipperspizza@gmail.com" 
                className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                whipperspizza@gmail.com
              </a>
            </p>
          </div>
          
          {/* Hours */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-[hsl(5,65%,40%)]">Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
              <div className="font-semibold">Monday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Tuesday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Wednesday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Thursday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Friday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Saturday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Sunday:</div>
              <div>11:00 AM - 9:00 PM</div>
            </div>
          </div>
          
          {/* Navigation and Social Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-[hsl(5,65%,40%)]">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu" 
                    className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/gallery" 
                    className="text-white hover:text-[hsl(5,65%,40%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Gallery
                  </Link>
                </li>
                <li className="col-span-2 mt-4">
                  <a 
                    href="tel:+12076221471" 
                    className="inline-flex items-center justify-center px-5 py-2 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Call Now
                  </a>
                </li>
              </ul>
            </nav>
            
            <h3 className="text-xl font-bold my-4 text-[hsl(145,63%,49%)]">Follow Us</h3>
            <div className="flex">
              <a 
                href="https://www.facebook.com/profile.php?id=100057050006369" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} Whippers Pizza. All rights reserved.</p>
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Whippers Pizza",
          "image": ["images/placeholder-hero-pizza.jpg"],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9 Bangor St",
            "addressLocality": "Augusta",
            "addressRegion": "ME",
            "postalCode": "04330-4701"
          },
          "telephone": "+1-207-622-1471",
          "email": "whipperspizza@gmail.com",
          "servesCuisine": "Pizza, Sandwiches",
          "priceRange": "$",
          "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "21:00"}
          ],
          "url": "https://www.facebook.com/profile.php?id=100057050006369",
          "menu": `${window.location.origin}/menu`
        })}
      </script>
    </footer>
  );
};

export default Footer;
