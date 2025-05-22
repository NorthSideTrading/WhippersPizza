import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import TestimonialSlider from '@/components/TestimonialSlider';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Whippers Pizza - Augusta, ME | Best Local Pizza</title>
        <meta name="description" content="Whippers Pizza serves Augusta's best hometown pizza with fresh ingredients and authentic recipes. Order online or visit us today!" />
      </Helmet>
      
      {/* Hero Section - Full-width Modern Design */}
      <section 
        className="hero relative bg-cover bg-center min-h-screen" 
        style={{ 
          backgroundImage: "linear-gradient(to bottom right, rgba(27,42,65,0.9), rgba(27,42,65,0.7)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
        id="home"
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center min-h-screen">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20 animate-fade-in">
            Augusta's Favorite Since 1983
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto slide-up">
            Handcrafted <span className="text-[hsl(145,63%,49%)]">Pizza</span> Made With Passion
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light slide-up">
            Family-owned for over 40 years, serving Augusta with homemade dough and signature sauce daily
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-up">
            <Link 
              href="/menu" 
              className="bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Our Menu
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-white/90 text-[hsl(212,40%,18%)] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Online
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section id="specials" className="py-12 bg-[hsl(220,14%,96%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[hsl(196,100%,47%)] font-medium mb-2 block">What's Hot</span>
            <h2 className="text-3xl font-bold mb-3">Today's Specials</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto">Experience our most popular dishes crafted with fresh ingredients and our secret family recipes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl stagger-item">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="The Bangor Street Beast Pizza" 
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[hsl(3,92%,51%)] text-white text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">The Bangor Street Beast</h3>
                  <span className="text-[hsl(3,92%,51%)] font-bold">$17.99</span>
                </div>
                <div className="flex items-center text-yellow-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-[hsl(220,13%,18%)]/70 mb-2 text-sm">Our signature creation loaded with pepperoni, sausage, bacon, ham, and extra cheese.</p>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center text-[hsl(196,100%,47%)] text-sm font-semibold hover:text-[hsl(196,100%,40%)] transition-colors"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl stagger-item">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Family Meal Deal" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[hsl(36,100%,50%)] text-white text-sm font-bold px-3 py-1 rounded-full">
                  Best Value
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Family Meal Deal</h3>
                  <span className="text-[hsl(3,92%,51%)] font-bold">$29.99</span>
                </div>
                <div className="flex items-center text-yellow-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-gray-500 ml-2">(86)</span>
                </div>
                <p className="text-[hsl(220,13%,18%)]/70 mb-4">One large 2-topping pizza, a dozen wings, garlic knots, and 2-liter soda. Perfect for feeding the whole family!</p>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center text-[hsl(196,100%,47%)] font-semibold hover:text-[hsl(196,100%,40%)] transition-colors"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl stagger-item">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Garden Veggie Delight Pizza" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Veggie
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Garden Veggie Delight</h3>
                  <span className="text-[hsl(3,92%,51%)] font-bold">$15.99</span>
                </div>
                <div className="flex items-center text-yellow-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-gray-500 ml-2">(94)</span>
                </div>
                <p className="text-[hsl(220,13%,18%)]/70 mb-4">Fresh seasonal vegetables, roasted bell peppers, olives, and mushrooms on our signature herb-infused sauce.</p>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center text-[hsl(196,100%,47%)] font-semibold hover:text-[hsl(196,100%,40%)] transition-colors"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/menu" 
              className="inline-flex items-center bg-[hsl(196,100%,47%)] text-white font-semibold py-2 px-6 rounded-full text-sm"
            >
              View Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(212,40%,18%)]">How We Serve You</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto">Experience the best pizza service in Augusta with multiple ways to enjoy our fresh, homemade goodness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[hsl(212,40%,18%)]/5 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[hsl(145,63%,49%)]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(212,40%,18%)] transition-all duration-500 group-hover:text-[hsl(145,63%,49%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(212,40%,18%)] transition-all duration-300 group-hover:text-[hsl(145,63%,49%)]">Dine In</h3>
              <p className="text-[hsl(220,13%,18%)]/70">Enjoy our cozy restaurant atmosphere with friends and family. Experience our pizzas fresh from the oven in our welcoming dining space.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[hsl(212,40%,18%)]/5 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[hsl(145,63%,49%)]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(212,40%,18%)] transition-all duration-500 group-hover:text-[hsl(145,63%,49%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(212,40%,18%)] transition-all duration-300 group-hover:text-[hsl(145,63%,49%)]">Takeout</h3>
              <p className="text-[hsl(220,13%,18%)]/70">Call ahead or order online for convenient pickup. We'll have your order hot and ready when you arrive at our Bangor Street location.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[hsl(212,40%,18%)]/5 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[hsl(145,63%,49%)]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(212,40%,18%)] transition-all duration-500 group-hover:text-[hsl(145,63%,49%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(212,40%,18%)] transition-all duration-300 group-hover:text-[hsl(145,63%,49%)]">Fast Delivery</h3>
              <p className="text-[hsl(220,13%,18%)]/70">We deliver throughout Augusta and surrounding areas. Hot and fresh pizza brought right to your door within our delivery zone.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-10 bg-[hsl(220,14%,96%)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Whippers Pizza restaurant interior with brick oven" 
                  className="rounded-lg shadow-lg w-full relative z-10"
                  loading="lazy"
                />
                <div className="absolute -bottom-3 -right-3 w-3/4 h-3/4 bg-[hsl(196,100%,47%)]/10 rounded-lg -z-10"></div>
                <div className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-md shadow-md">
                  <p className="text-[hsl(3,92%,51%)] font-bold text-base">40+ Years</p>
                  <p className="text-xs text-[hsl(220,13%,18%)]/70">Of Excellence</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-[hsl(196,100%,47%)] font-medium mb-1 block text-sm">Our Story</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">About Whippers Pizza</h2>
              <p className="text-[hsl(220,13%,18%)]/80 mb-3 text-sm">An Augusta, Maine Landmark for over 40 years, Whipper's Pizza offers delicious, homemade pizza and sandwiches. Our secret is in our fresh dough and signature sauce made daily.</p>
              <p className="text-[hsl(220,13%,18%)]/80 mb-4 text-sm">A family-run local shop serving our community! We're proud to offer great taste at a great price, which is why generations of Augusta families have made us their favorite pizzeria.</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[hsl(196,100%,47%)]/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(196,100%,47%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Fresh Ingredients</h3>
                    <p className="text-xs text-[hsl(220,13%,18%)]/70">Locally sourced when possible</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[hsl(196,100%,47%)]/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(196,100%,47%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Fast Service</h3>
                    <p className="text-xs text-[hsl(220,13%,18%)]/70">We value your time</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center bg-[hsl(196,100%,47%)] text-white font-semibold py-2 px-6 rounded-full text-sm"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 bg-[hsl(212,40%,18%)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
            <p className="text-white/80 max-w-xl mx-auto">Read what Augusta locals have to say about their favorite pizza spot</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 bg-[hsl(145,63%,49%)]/10 rounded-full -z-10"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-[hsl(145,63%,49%)]/10 rounded-full -z-10"></div>
            
            <TestimonialSlider />
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              <span className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-[hsl(145,63%,49%)] cursor-pointer"></span>
              <span className="w-3 h-3 bg-[hsl(145,63%,49%)] rounded-full"></span>
              <span className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-[hsl(145,63%,49%)] cursor-pointer"></span>
              <span className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-[hsl(145,63%,49%)] cursor-pointer"></span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-[hsl(196,100%,47%)] font-medium mb-1 block text-sm">#WhippersPizza</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Fresh From Our Ovens</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto text-sm">Follow us on social media and tag your Whippers moments</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="relative overflow-hidden rounded-lg group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Fresh pizza" 
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2">
                  <p className="text-white font-medium text-sm">Fresh from the oven</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza slice" 
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2">
                  <p className="text-white font-medium text-sm">Perfect slice</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza toppings" 
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2">
                  <p className="text-white font-medium text-sm">Fresh ingredients</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza maker" 
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2">
                  <p className="text-white font-medium text-sm">Crafted with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-[hsl(196,100%,47%)] to-[hsl(210,100%,40%)] text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute -bottom-1 left-0 w-full opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">Ready to Experience Augusta's Best Pizza?</h2>
            <p className="text-base mb-6 text-white/80 max-w-2xl mx-auto">We're ready to serve you the most delicious pizza in Augusta, whether dining in, taking out, or delivery.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1">Call Us</h3>
                <a href="tel:+12076233500" className="text-white hover:underline text-sm">(207) 623-3500</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1">Visit Us</h3>
                <p className="text-white/80 text-sm">97 Bangor St, Augusta, ME</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1">Hours</h3>
                <p className="text-white/80 text-sm">11AM - 9PM Daily</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+12076233500" 
                className="bg-white text-[hsl(212,40%,18%)] hover:bg-opacity-90 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Call Now
              </a>
              <Link 
                href="/menu" 
                className="bg-[hsl(3,92%,51%)] hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
