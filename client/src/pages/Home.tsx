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
      <section className="py-16 bg-[#FFF9C4] bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Margherita Special Pizza" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">The Bangor Street Beast</h3>
                  <span className="text-[#B71C1C] font-bold">$17.99</span>
                </div>
                <p className="text-gray-600 mb-4">Our signature creation loaded with pepperoni, sausage, bacon, ham, and extra cheese on our homemade dough and sauce.</p>
                <Link href="/menu" className="text-[#8BC34A] font-bold hover:underline">View Details</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Double Pepperoni Feast Pizza" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Family Meal Deal</h3>
                  <span className="text-[#B71C1C] font-bold">$29.99</span>
                </div>
                <p className="text-gray-600 mb-4">One large 2-topping pizza, a dozen wings, garlic knots, and 2-liter soda. Perfect for feeding the whole family!</p>
                <Link href="/menu" className="text-[#8BC34A] font-bold hover:underline">View Details</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Garden Veggie Delight Pizza" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Garden Veggie Delight</h3>
                  <span className="text-[#B71C1C] font-bold">$15.99</span>
                </div>
                <p className="text-gray-600 mb-4">Fresh seasonal vegetables, roasted bell peppers, olives, and mushrooms on our signature herb-infused sauce.</p>
                <Link href="/menu" className="text-[#8BC34A] font-bold hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Whippers Pizza restaurant interior with brick oven" 
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Whippers Pizza</h2>
              <p className="text-gray-700 mb-6">An Augusta, Maine Landmark for over 40 years, Whipper's Pizza offers delicious, homemade pizza and sandwiches. Our secret is in our fresh dough and signature sauce made daily.</p>
              <p className="text-gray-700 mb-8">A family-run local shop serving our community! We're proud to offer great taste at a great price, which is why generations of Augusta families have made us their favorite pizzeria.</p>
              <Link 
                href="/about" 
                className="inline-block bg-[#B71C1C] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#333] text-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFF9C4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the best pizza Augusta has to offer. Dine in, order for pickup, or get delivery straight to your door.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+12075557492" 
              className="bg-[#B71C1C] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Call Now: (207) 555-PIZA
            </a>
            <Link 
              href="/menu" 
              className="bg-[#8BC34A] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
