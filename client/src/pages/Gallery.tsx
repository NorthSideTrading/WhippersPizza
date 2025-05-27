import { Helmet } from "react-helmet-async";
import bigWhipImage from "@assets/party-platter.jpeg";
import ownersImage from "@assets/472788640_1125310129380643_5246298413575885458_n.jpg";
import pizzaImage from "@assets/500229768_1226622745916047_1080895992016072384_n.jpg";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: bigWhipImage,
      alt: "The Famous Big Whip - Our signature party platter",
      title: "The Famous Big Whip",
      description: "Our legendary party platter that has been delighting Augusta families for decades"
    },
    {
      id: 2,
      src: ownersImage,
      alt: "Whippers Pizza owners and staff",
      title: "The Whippers Family",
      description: "Meet the dedicated team that makes Whippers Pizza a local Augusta landmark"
    },
    {
      id: 3,
      src: pizzaImage,
      alt: "Fresh Whippers Pizza",
      title: "Authentic Pizza Craftsmanship",
      description: "Hand-crafted pizzas made with the finest ingredients and 40+ years of tradition"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gallery - Whippers Pizza | Augusta, ME</title>
        <meta name="description" content="Browse our photo gallery showcasing the famous Big Whip, our dedicated team, and authentic pizza craftsmanship at Whippers Pizza in Augusta, Maine." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(212,40%,18%)] to-[hsl(212,35%,25%)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-[hsl(145,63%,49%)]">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Take a visual journey through Whippers Pizza - from our famous Big Whip to the faces behind Augusta's favorite pizza destination
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(212,40%,18%)] mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[hsl(212,40%,18%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Whippers Pizza?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Come visit us at our Augusta location and taste the tradition that has made us a local favorite for over 40 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+12076221471" 
              className="inline-flex items-center px-8 py-3 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (207) 622-1471
            </a>
            <a 
              href="https://maps.google.com/?q=9+Bangor+St,+Augusta,+ME+04330" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-[hsl(145,63%,49%)] text-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,49%)] hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}