import { Helmet } from 'react-helmet-async';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Whippers Pizza | Augusta, ME</title>
        <meta name="description" content="Get in touch with Whippers Pizza in Augusta, Maine. Contact us for inquiries, feedback, or to place an order for pickup or delivery." />
      </Helmet>

      {/* Page Header with Pizza Image */}
      <div className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Fresh baked pizza" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">We'd love to hear from you! Get in touch with any questions or feedback.</p>
          <div className="w-24 h-1 bg-[hsl(145,63%,49%)] mx-auto mt-8"></div>
        </div>
      </div>

      {/* Contact Details & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <address className="not-italic text-gray-700">
                  9 Bangor St<br />
                  Augusta, ME 04330-4701
                </address>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="mb-2">
                  <span className="font-semibold">Phone:</span>{' '}
                  <a 
                    href="tel:+12076221471" 
                    className="text-[#2ECC71] hover:underline"
                  >
                    (207) 622-1471
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a 
                    href="mailto:whipperspizza@gmail.com" 
                    className="text-[#2ECC71] hover:underline"
                  >
                    whipperspizza@gmail.com
                  </a>
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">Monday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Tuesday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Wednesday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Thursday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Friday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Saturday: 11:00 AM - 9:00 PM</li>
                  <li>Sunday: 11:00 AM - 9:00 PM</li>
                </ul>
              </div>
              
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3069598212954!2d-69.75731882414016!3d44.32205427111014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb203e45c99d24d%3A0x5d3b261161be39e4!2s97%20Bangor%20St%2C%20Augusta%2C%20ME%2004330%2C%20USA!5e0!3m2!1sen!2sus!4v1684861234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Whippers Pizza Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-gray-700">
                Have a question, comment, or special request? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Do you offer delivery?</h3>
              <p className="text-gray-700">Yes, we offer delivery within a 5-mile radius of our restaurant. Delivery fees may apply.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Do you have gluten-free options?</h3>
              <p className="text-gray-700">Yes, we offer gluten-free crust for all of our pizzas for an additional charge. Please note that our kitchen does process gluten products, so there may be traces of gluten.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Can I place an order online?</h3>
              <p className="text-gray-700">Currently, we accept orders by phone or in person. We're working on an online ordering system that will be available soon!</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you cater events?</h3>
              <p className="text-gray-700">Yes, we offer catering services for parties and events of all sizes. Please contact us at least 48 hours in advance to discuss your catering needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
