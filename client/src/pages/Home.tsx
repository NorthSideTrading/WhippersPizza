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
      
      {/* Hero Section - Full Screen with Modern Design */}
      <section 
        className="hero relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20 animate-fade-in">
            Augusta's Favorite Since 1983
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-5xl mx-auto slide-up">
            Handcrafted <span className="text-[hsl(36,100%,50%)]">Pizza</span> Made With Passion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light slide-up">
            Family-owned for over 40 years, serving Augusta with homemade dough and signature sauce daily
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-up">
            <Link 
              href="/menu" 
              className="bg-[hsl(196,100%,47%)] text-white font-semibold py-4 px-8 rounded-full"
            >
              View Our Menu
            </Link>
            <Link 
              href="/contact" 
              className="bg-[hsl(3,92%,51%)] text-white font-semibold py-4 px-8 rounded-full"
            >
              Order Online
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Hero Wave Divider */}
      <div className="section-divider"></div>

      {/* Specials Section */}
      <section id="specials" className="py-20 bg-[hsl(220,14%,96%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[hsl(196,100%,47%)] font-medium mb-3 block">What's Hot</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Specials</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto">Experience our most popular dishes crafted with fresh ingredients and our secret family recipes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl stagger-item">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="The Bangor Street Beast Pizza" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[hsl(3,92%,51%)] text-white text-sm font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">The Bangor Street Beast</h3>
                  <span className="text-[hsl(3,92%,51%)] font-bold">$17.99</span>
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
                  <span className="text-xs text-gray-500 ml-2">(128)</span>
                </div>
                <p className="text-[hsl(220,13%,18%)]/70 mb-4">Our signature creation loaded with pepperoni, sausage, bacon, ham, and extra cheese on our homemade dough and sauce.</p>
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
          
          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-flex items-center bg-[hsl(196,100%,47%)] text-white font-semibold py-3 px-8 rounded-full"
            >
              View Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[hsl(196,100%,47%)] font-medium mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Serve You</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto">Experience the best pizza service in Augusta with multiple ways to enjoy our fresh, homemade goodness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal">
              <div className="w-16 h-16 bg-[hsl(196,100%,47%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(196,100%,47%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dine In</h3>
              <p className="text-[hsl(220,13%,18%)]/70 mb-4">Enjoy our cozy restaurant atmosphere with friends and family. Experience our pizza fresh from the oven.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal">
              <div className="w-16 h-16 bg-[hsl(3,92%,51%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(3,92%,51%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Takeout</h3>
              <p className="text-[hsl(220,13%,18%)]/70 mb-4">Call ahead or order online. We'll have your order hot and ready for pickup at your convenience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal">
              <div className="w-16 h-16 bg-[hsl(36,100%,50%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[hsl(36,100%,50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-[hsl(220,13%,18%)]/70 mb-4">We deliver throughout Augusta and surrounding areas. Hot and fresh pizza right to your door.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-[hsl(3,92%,51%)] text-white font-semibold py-3 px-8 rounded-full"
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
      <section id="about" className="py-20 bg-[hsl(220,14%,96%)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Whippers Pizza restaurant interior with brick oven" 
                  className="rounded-xl shadow-xl w-full relative z-10"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-[hsl(196,100%,47%)]/10 rounded-xl -z-10"></div>
                <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                  <p className="text-[hsl(3,92%,51%)] font-bold text-xl">40+ Years</p>
                  <p className="text-sm text-[hsl(220,13%,18%)]/70">Of Excellence</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-[hsl(196,100%,47%)] font-medium mb-3 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Whippers Pizza</h2>
              <p className="text-[hsl(220,13%,18%)]/80 mb-6 text-lg">An Augusta, Maine Landmark for over 40 years, Whipper's Pizza offers delicious, homemade pizza and sandwiches. Our secret is in our fresh dough and signature sauce made daily.</p>
              <p className="text-[hsl(220,13%,18%)]/80 mb-8 text-lg">A family-run local shop serving our community! We're proud to offer great taste at a great price, which is why generations of Augusta families have made us their favorite pizzeria.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[hsl(196,100%,47%)]/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(196,100%,47%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Fresh Ingredients</h3>
                    <p className="text-sm text-[hsl(220,13%,18%)]/70">Locally sourced when possible</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[hsl(196,100%,47%)]/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(196,100%,47%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Fast Service</h3>
                    <p className="text-sm text-[hsl(220,13%,18%)]/70">We value your time</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center bg-[hsl(196,100%,47%)] text-white font-semibold py-3 px-8 rounded-full"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[hsl(210,33%,9%)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[hsl(36,100%,50%)] font-medium mb-3 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
            <p className="text-white/70 max-w-xl mx-auto">Read what Augusta locals have to say about their favorite pizza spot</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-20 h-20 bg-[hsl(196,100%,47%)]/10 rounded-full -z-10"></div>
            <div className="absolute top-1/4 right-10 transform -translate-y-1/2 w-12 h-12 bg-[hsl(3,92%,51%)]/10 rounded-full -z-10"></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-[hsl(36,100%,50%)]/10 rounded-full -z-10"></div>
            
            <TestimonialSlider />
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-white/30 rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white/30 rounded-full"></span>
              <span className="w-3 h-3 bg-white/30 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[hsl(196,100%,47%)] font-medium mb-3 block">#WhippersPizza</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh From Our Ovens</h2>
            <p className="text-[hsl(220,13%,18%)]/70 max-w-xl mx-auto">Follow us on social media and tag your Whippers moments</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-xl group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Fresh pizza" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">Fresh from the oven</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza slice" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">Perfect slice</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza toppings" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">Fresh ingredients</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group stagger-item">
              <img 
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pizza maker" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">Crafted with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[hsl(196,100%,47%)] to-[hsl(210,100%,40%)] text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute -bottom-2 left-0 w-full opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
          <svg className="absolute -top-2 left-0 w-full rotate-180 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Experience Augusta's Best Pizza?</h2>
            <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">Whether you're dining in, ordering for pickup, or requesting delivery, we're ready to serve you the most delicious pizza in Augusta.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <a href="tel:+12076233500" className="text-white hover:underline">(207) 623-3500</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-white/80">97 Bangor St, Augusta, ME</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Hours</h3>
                <p className="text-white/80">11AM - 9PM Daily</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+12076233500" 
                className="bg-white text-[hsl(196,100%,47%)] hover:bg-opacity-90 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
              <Link 
                href="/menu" 
                className="bg-[hsl(3,92%,51%)] hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
