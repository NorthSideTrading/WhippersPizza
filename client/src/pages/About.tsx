import { Helmet } from 'react-helmet-async';
import whippersOwnerImage from "@assets/472788640_1125310129380643_5246298413575885458_n.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Our Story - Whippers Pizza, Augusta</title>
        <meta name="description" content="Learn about Whippers Pizza's journey, our mission, values, and the dedicated team behind Augusta's favorite pizza restaurant." />
      </Helmet>

      {/* Page Header with Pizza Image */}
      <div className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Pizza preparation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-[hsl(5,75%,55%)] font-medium mb-2 block uppercase tracking-wider drop-shadow-2xl">Our Heritage</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-white drop-shadow-lg">Our story of passion, tradition, and the love for authentic pizza since 1983.</p>
          <div className="w-24 h-1 bg-[hsl(5,65%,40%)] mx-auto mt-8"></div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src={whippersOwnerImage} 
                alt="Whippers Pizza owners" 
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">Whipper's Pizza has proudly served as an Augusta, Maine Landmark for over 40 years. Our tradition is built on homemade dough and sauce, crafting delicious pizzas and sandwiches that our community loves, all at a great price.</p>
              <p className="text-gray-700 mb-4">As a dedicated family-run local pizza shop, we cherish our customers and the decades of support. Our commitment to freshness and authenticity has made us a favorite for generations of Augusta residents.</p>
              <p className="text-gray-700">We continue to uphold our tradition of excellence, using time-tested recipes and quality ingredients to create the memorable taste that's kept our customers coming back for decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[hsl(5,65%,40%)] font-medium mb-2 block uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(212,40%,18%)]">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that have guided our business for over four decades and built our reputation in Augusta.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[hsl(5,65%,40%)]/10 text-[hsl(5,65%,40%)] w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(212,40%,18%)] text-center">Quality Ingredients</h3>
              <p className="text-gray-600 text-center">Our mission is to continue the tradition of providing Augusta with high-quality, delicious food made with care. We make our dough fresh daily and prepare our signature sauce in-house, ensuring every bite delivers authentic flavor.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[hsl(5,65%,40%)]/10 text-[hsl(5,65%,40%)] w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(212,40%,18%)] text-center">Family Values</h3>
              <p className="text-gray-600 text-center">We believe in the importance of family, tradition, and supporting our local patrons who have made us a landmark for decades. Our family-run business brings a personal touch to every order.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[hsl(5,65%,40%)]/10 text-[hsl(5,65%,40%)] w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(212,40%,18%)] text-center">Community Service</h3>
              <p className="text-gray-600 text-center">Augusta isn't just where our restaurant is located—it's our home. For over 40 years, we've been committed to serving our community with delicious food at a great price, making us a local landmark.</p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default About;
