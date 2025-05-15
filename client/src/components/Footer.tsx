import { useEffect, useState } from 'react';
import { Link } from 'wouter';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#333] text-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Whippers Pizza</h3>
            <address className="not-italic mb-4">
              123 Main St<br />
              Augusta, ME 04330
            </address>
            <p className="mb-4">
              <a 
                href="tel:+12075557492" 
                className="hover:text-[#8BC34A] transition-colors duration-200"
              >
                (207) 555-PIZA
              </a>
            </p>
            <p>
              <a 
                href="mailto:info@whipperspizza.com" 
                className="hover:text-[#8BC34A] transition-colors duration-200"
              >
                info@whipperspizza.com
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul>
              <li className="mb-2">Monday - Friday: 11:00 AM - 9:00 PM</li>
              <li className="mb-2">Saturday: 12:00 PM - 10:00 PM</li>
              <li>Sunday: 12:00 PM - 10:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-[#FAFAFA] hover:text-[#8BC34A] transition-colors duration-200"
              >
                <span className="text-2xl">[FB]</span>
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-[#FAFAFA] hover:text-[#8BC34A] transition-colors duration-200"
              >
                <span className="text-2xl">[IG]</span>
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="text-[#FAFAFA] hover:text-[#8BC34A] transition-colors duration-200"
              >
                <span className="text-2xl">[TW]</span>
              </a>
            </div>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="hover:text-[#8BC34A] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="hover:text-[#8BC34A] transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu" 
                    className="hover:text-[#8BC34A] transition-colors duration-200"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="hover:text-[#8BC34A] transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
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
            "streetAddress": "123 Main St",
            "addressLocality": "Augusta",
            "addressRegion": "ME",
            "postalCode": "04330"
          },
          "telephone": "+1-207-555-PIZA",
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "11:00", "closes": "21:00"},
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "12:00", "closes": "22:00"}
          ],
          "url": window.location.origin,
          "menu": `${window.location.origin}/menu`
        })}
      </script>
    </footer>
  );
};

export default Footer;
