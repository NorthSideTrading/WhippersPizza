import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Best pizza in Augusta. The dough and sauce are made from scratch using the same recipe for over 40 years. My wife and I order from Whippers at least once per week. The quality is 100% consistent. My wife gets a cheese calzone with fresh mushrooms added. I get a meatball calzone with green peppers and extra cheese.",
    author: "Scott Peaslee"
  },
  {
    quote: "Best sandwiches and calzones in the area. Their Italian cold sandwich is my favorite. Pizza is a close second. And the calzones are excellent. They are a nice size and packed with meat and cheese. Never been disappointed.",
    author: "Brian McCrea"
  },
  {
    quote: "A taste of heaven!  Pizza, calzones, meatball sandwiches the list goes on.  It's not a fancy place, their focus is on the food and they do it great!!",
    author: "Richard Angell"
  },
  {
    quote: "Best pizza in Augusta hands down. Staff is friendly and laid back. Try the calzones. And try the potato bacon ranch pizza. It's not on the menu but you can ask for it.",
    author: "Lorie Dostie"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider max-w-3xl mx-auto px-4 sm:px-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className={`testimonial px-4 py-8 text-center ${index === currentIndex ? 'active' : ''}`}
        >
          <div className="mb-6">
            <svg className="w-12 h-12 mx-auto text-[hsl(145,63%,49%)]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-base sm:text-xl mb-6 text-white leading-relaxed">"{testimonial.quote}"</p>
          <div className="font-bold text-white">{testimonial.author}</div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
