import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Whippers Pizza</title>
        <meta name="description" content="The page you're looking for could not be found. Return to Whippers Pizza home page." />
      </Helmet>
      
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF9C4] bg-opacity-30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#B71C1C]">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Oops—lost in the sauce?</h2>
          <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
          <Link 
            href="/" 
            className="bg-[#8BC34A] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Return to Home
          </Link>
          
          <div className="mt-12 max-w-xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pizza with missing slice representing the missing page" 
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
