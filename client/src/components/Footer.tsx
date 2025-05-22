import { useEffect, useState } from 'react';
import { Link } from 'wouter';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1B2A41] text-white">
      {/* Map Section */}
      <div className="w-full h-[300px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.307218860361!2d-69.75731882381578!3d44.32205427111014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb203e465b9a03f%3A0xf5b6a1eb59df917a!2s97%20Bangor%20St%2C%20Augusta%2C%20ME%2004330!5e0!3m2!1sen!2sus!4v1684861798971!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Whippers Pizza Location"
          className="absolute top-0 left-0"
        ></iframe>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Contact Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img 
              src="/attached_assets/image_1747933098636.png" 
              alt="Whippers Pizza Logo" 
              className="h-24 w-auto mb-6"
            />
            <address className="not-italic mb-4 text-white">
              97 Bangor St<br />
              Augusta, ME 04330
            </address>
            <p className="mb-2">
              <a 
                href="tel:+12076233500" 
                className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (207) 623-3500
              </a>
            </p>
            <p>
              <a 
                href="mailto:whipperspizza@gmail.com" 
                className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
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
            <h3 className="text-xl font-bold mb-4 text-[hsl(145,63%,49%)]">Hours</h3>
            <div className="grid grid-cols-2 gap-2">
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
            <h3 className="text-xl font-bold mb-4 text-[hsl(145,63%,49%)]">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
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
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
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
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </Link>
                </li>
                <li className="col-span-2 mt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-5 py-2 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Order Now
                  </Link>
                </li>
              </ul>
            </nav>
            
            <h3 className="text-xl font-bold my-4 text-[hsl(145,63%,49%)]">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100057050006369" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
            "streetAddress": "97 Bangor St",
            "addressLocality": "Augusta",
            "addressRegion": "ME",
            "postalCode": "04330"
          },
          "telephone": "+1-207-623-3500",
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
