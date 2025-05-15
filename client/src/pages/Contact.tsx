import { Helmet } from 'react-helmet-async';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Whippers Pizza | Augusta, ME</title>
        <meta name="description" content="Get in touch with Whippers Pizza in Augusta, Maine. Contact us for inquiries, feedback, or to place an order for pickup or delivery." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-[#B71C1C] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you! Get in touch with any questions or feedback.</p>
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
                  123 Main St<br />
                  Augusta, ME 04330
                </address>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="mb-2">
                  <span className="font-semibold">Phone:</span>{' '}
                  <a 
                    href="tel:+12075557492" 
                    className="text-[#B71C1C] hover:underline"
                  >
                    (207) 555-PIZA
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a 
                    href="mailto:info@whipperspizza.com" 
                    className="text-[#B71C1C] hover:underline"
                  >
                    info@whipperspizza.com
                  </a>
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <ul className="text-gray-700">
                  <li className="mb-1">Monday - Friday: 11:00 AM - 9:00 PM</li>
                  <li className="mb-1">Saturday: 12:00 PM - 10:00 PM</li>
                  <li>Sunday: 12:00 PM - 10:00 PM</li>
                </ul>
              </div>
              
              <div id="map-placeholder" style={{ height: 300, background: '#eee', textAlign: 'center', lineHeight: '300px', marginTop: 20 }}>
                Google Map Embed for 123 Main St, Augusta ME Here
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
      <section className="py-16 bg-[#FFF9C4] bg-opacity-30">
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
