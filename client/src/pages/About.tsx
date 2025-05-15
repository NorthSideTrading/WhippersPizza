import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Our Story - Whippers Pizza, Augusta</title>
        <meta name="description" content="Learn about Whippers Pizza's journey, our mission, values, and the dedicated team behind Augusta's favorite pizza restaurant." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-[#B71C1C] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Our story of passion, tradition, and the love for authentic pizza.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pizza chef preparing dough" 
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">Whipper's Pizza has been an Augusta, Maine Landmark for over 40 years. We pride ourselves on our homemade dough and sauce, crafting delicious pizzas and sandwiches at a great price.</p>
              <p className="text-gray-700 mb-4">As a family-run local pizza shop, we're dedicated to serving our community with quality food and a friendly atmosphere. Our commitment to freshness and authenticity has made us a favorite for generations of Augusta residents.</p>
              <p className="text-gray-700">We continue to uphold our tradition of excellence, using time-tested recipes and quality ingredients to create the memorable taste that's kept our customers coming back for decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-[#FFF9C4] bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#B71C1C] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Ingredients</h3>
              <p className="text-gray-700">Our mission is simple: to provide the Augusta community with high-quality, homemade food that tastes great and offers excellent value. We make our dough fresh daily and prepare our signature sauce in-house.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#B71C1C] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Family Values</h3>
              <p className="text-gray-700">We believe in the importance of family, tradition, and supporting our local patrons who have made us a landmark for decades. Our family-run business brings a personal touch to every order.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#B71C1C] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Service</h3>
              <p className="text-gray-700">Augusta isn't just where our restaurant is located—it's our home. For over 40 years, we've been committed to serving our community with delicious food at a great price, making us a local landmark.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Marco Romano - Head Chef" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">Marco Romano</h3>
              <p className="text-[#B71C1C] font-medium mb-2">Head Chef</p>
              <p className="text-gray-700">Marco learned pizza-making from his father Tony and brings 15 years of culinary expertise to every pie he creates.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Sofia Romano - Manager" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">Sofia Romano</h3>
              <p className="text-[#B71C1C] font-medium mb-2">Manager</p>
              <p className="text-gray-700">Sofia oversees daily operations and is dedicated to maintaining the warm, family atmosphere Whippers is known for.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="James Mitchell - Sourcing Director" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">James Mitchell</h3>
              <p className="text-[#B71C1C] font-medium mb-2">Sourcing Director</p>
              <p className="text-gray-700">James works with local farms and suppliers to ensure we always have the freshest, highest-quality ingredients.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
