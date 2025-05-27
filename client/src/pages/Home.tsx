import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { SPECIALS } from '@/data/homeSpecials';
import whippersOwnerImage from "@assets/472788640_1125310129380643_5246298413575885458_n.jpg";
import whippersHeroImage from "@assets/ChatGPT Image May 27, 2025, 01_21_38 PM.png";
import partyPlatterImage from "@assets/party-platter.jpeg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Whipper's Pizza | Home of the Big Whip</title>
        <meta name="description" content="Since 1960, Whipper's Pizza has been Augusta's home of The Big Whip - our legendary 16-inch Italian roll sandwich. Founded by Robert E. 'Whipper' Wheelock Sr., serving authentic family recipes for over 65 years." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={whippersHeroImage}
            alt="Whippers Pizza storefront - Home of Whipper's Pizza"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pb-8 mt-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-extrabold uppercase tracking-wide mb-4 drop-shadow-2xl text-white text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div>WHIPPER'S FAMOUS</div>
            <div>BIG WHIP</div>
          </motion.h1>
          <p className="text-lg lg:text-xl mb-6 font-medium drop-shadow-lg text-white text-center">
            Augusta's Legendary Italian Roll Sandwich Since 1960
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/menu"
              className="bg-[hsl(145,63%,49%)] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-base shadow-lg"
            >
              View Menu
            </Link>
            <Link 
              href="/menu#big-whip"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(212,40%,18%)] font-bold py-3 px-6 rounded-full transition duration-300 text-base shadow-lg backdrop-blur-sm"
            >
              Order Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Specials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block uppercase tracking-wider">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,40%,18%)] mb-4">Signature Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three generations of perfected recipes, including our world-famous Big Whip</p>
          </div>

          {/* Desktop Layout - Big Whip emphasized in center */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
            {/* The Whipper - Left */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="The Whipper sandwich"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(212,40%,18%)] mb-2">{SPECIALS[1].title}</h3>
              <p className="text-gray-600 mb-4">{SPECIALS[1].blurb}</p>
              <Link 
                href="/menu#whipper"
                className="text-[hsl(145,63%,49%)] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* The Big Whip - Center (Emphasized) */}
            <motion.div
              className="bg-gradient-to-br from-[hsl(145,63%,49%)] to-[hsl(145,63%,45%)] rounded-2xl shadow-xl p-8 text-white scale-110 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-[4/3] bg-white/20 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="The Big Whip - our signature 16-inch sandwich"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{SPECIALS[0].title}</h3>
              <p className="mb-4 text-white/90">{SPECIALS[0].blurb}</p>
              <p className="text-xl font-bold mb-4">{SPECIALS[0].price}</p>
              <Link 
                href="/menu#big-whip"
                className="bg-white text-[hsl(145,63%,49%)] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Order The Big Whip
              </Link>
            </motion.div>

            {/* Party Platter - Right */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={partyPlatterImage}
                  alt="Party platter with multiple Big Whip sandwiches"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-[hsl(212,40%,18%)] mb-2">{SPECIALS[2].title}</h3>
              <p className="text-gray-600 mb-4">{SPECIALS[2].blurb}</p>
              <Link 
                href="/menu#party"
                className="text-[hsl(145,63%,49%)] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {SPECIALS.map((special, index) => (
              <motion.div
                key={special.id}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  special.id === 'big-whip' ? 'scale-105 bg-gradient-to-br from-[hsl(145,63%,49%)] to-[hsl(145,63%,45%)] text-white' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={special.id === 'big-whip' 
                      ? "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : special.id === 'whipper'
                      ? "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : partyPlatterImage
                    }
                    alt={`${special.title} - ${special.blurb}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${special.id === 'big-whip' ? 'text-white' : 'text-[hsl(212,40%,18%)]'}`}>
                  {special.title}
                </h3>
                <p className={`mb-4 ${special.id === 'big-whip' ? 'text-white/90' : 'text-gray-600'}`}>
                  {special.blurb}
                </p>
                {special.price && (
                  <p className={`text-lg font-bold mb-4 ${special.id === 'big-whip' ? 'text-white' : 'text-[hsl(145,63%,49%)]'}`}>
                    {special.price}
                  </p>
                )}
                <Link 
                  href={`/menu#${special.id}`}
                  className={`font-semibold hover:underline ${
                    special.id === 'big-whip' 
                      ? 'bg-white text-[hsl(145,63%,49%)] py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300 no-underline hover:no-underline' 
                      : 'text-[hsl(145,63%,49%)]'
                  }`}
                >
                  {special.id === 'big-whip' ? 'Order The Big Whip' : 'Learn More →'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
            <div className="mb-8 lg:mb-0">
              <img 
                src={whippersOwnerImage}
                alt="The Whipper's Pizza family - continuing the tradition since 1960"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block uppercase tracking-wider">Our Heritage</span>
              <h2 className="text-3xl font-bold text-[hsl(212,40%,18%)] mb-6">65+ Years of Tradition</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1960 by Robert E. "Whipper" Wheelock Sr., we've been slinging pies & monster sandwiches for over 65 years. Three generations later, that same family recipe – and the famous Big Whip – still anchor every order.
              </p>
              <p className="text-gray-700 mb-6">
                From our humble beginnings on Bangor Street to becoming Augusta's beloved landmark, Whipper's Pizza has remained true to our founder's vision: serve authentic, hearty food that brings families and friends together.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-[hsl(145,63%,49%)] text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[hsl(212,40%,18%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for The Big Whip?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call ahead or visit us at 9 Bangor St in Augusta. We'll have your Big Whip ready!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12076221471"
              className="bg-[hsl(145,63%,49%)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Call Now: (207) 622-1471
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(212,40%,18%)] font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;