import { Helmet } from "react-helmet-async";
// Pizza Images
import pizzaGallery1 from "@assets/Pizza/pizza-gallery1.jpg";
import pizzaGallery2 from "@assets/Pizza/pizza-galler2.jpg";
import pizzaGallery3 from "@assets/Pizza/pizza-galler3.jpg";
import pizzaGallery4 from "@assets/Pizza/pizza-gallery4.jpg";

// Platter Images
import partyPlatter from "@assets/party-platter.jpeg";
import platterGallery1 from "@assets/Platters/platter-gallery1.jpg";
import platterGallery2 from "@assets/Platters/platter-gallery2.jpg";
import platterGallery3 from "@assets/Platters/platter-gallery3.jpg";

// Sandwich Images
import sandwichMain from "@assets/Sandwhiches/images.jpeg";
import sandGallery1 from "@assets/Sandwhiches/sand-galler1.jpg";
import sandGallery2 from "@assets/Sandwhiches/sand-galler2.jpg";
import sandGallery3 from "@assets/Sandwhiches/sand-galler3.jpg";
import sandGallery5 from "@assets/Sandwhiches/sand-gallery5.jpg";

// Team Images
import teamGallery1 from "@assets/Team/team-gallery1.jpg";
import teamGallery2 from "@assets/Team/team-galler2.jpg";
import teamGallery3 from "@assets/Team/team-galler3.jpg";
import ownersImage from "@assets/472788640_1125310129380643_5246298413575885458_n.jpg";

// Additional Images
import bigWhipImage from "@assets/500229768_1226622745916047_1080895992016072384_n.jpg";
import whippersHero from "@assets/whippers-hero.png";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: pizzaGallery1, alt: "Authentic Whippers Pizza" },
    { id: 2, src: platterGallery1, alt: "Whippers Pizza Platter" },
    { id: 3, src: sandGallery1, alt: "Famous Big Whip Sandwich" },
    { id: 4, src: teamGallery1, alt: "Whippers Pizza Team" },
    { id: 5, src: pizzaGallery2, alt: "Fresh Pizza" },
    { id: 6, src: ownersImage, alt: "Whippers Pizza Family" },
    { id: 7, src: platterGallery2, alt: "Party Platter" },
    { id: 8, src: sandGallery2, alt: "Big Whip Sandwich" },
    { id: 9, src: pizzaGallery3, alt: "Delicious Pizza" },
    { id: 10, src: partyPlatter, alt: "Famous Big Whip Platter" },
    { id: 11, src: teamGallery2, alt: "Restaurant Team" },
    { id: 12, src: sandGallery3, alt: "Italian Roll Sandwich" },
    { id: 13, src: pizzaGallery4, alt: "Wood-Fired Pizza" },
    { id: 14, src: platterGallery3, alt: "Family Platter" },
    { id: 15, src: sandwichMain, alt: "Signature Sandwich" },
    { id: 16, src: teamGallery3, alt: "Kitchen Staff" },
    { id: 17, src: sandGallery5, alt: "Big Whip Special" },
    { id: 18, src: bigWhipImage, alt: "The Famous Big Whip" },
    { id: 19, src: whippersHero, alt: "Whippers Pizza Storefront" }
  ].sort(() => Math.random() - 0.5); // Randomize the order

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
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  width: '100%'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
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