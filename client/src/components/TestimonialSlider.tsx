import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Whippers Pizza has been our family's go-to for Friday night dinners for years. Their Margherita Special is simply the best pizza I've ever had, and the service is always friendly and fast!",
    author: "Sarah M."
  },
  {
    quote: "I'm very particular about pizza, and Whippers consistently exceeds my expectations. The ingredients are fresh, the crust is perfect, and they're always willing to accommodate special requests.",
    author: "Michael T."
  },
  {
    quote: "As a newcomer to Augusta, discovering Whippers Pizza was a highlight. Their Garden Veggie Delight has become my weekly treat, and the staff always makes me feel like a regular. Highly recommend!",
    author: "Jennifer L."
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
    <div className="testimonial-slider max-w-3xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className={`testimonial px-4 py-8 text-center ${index === currentIndex ? 'active' : ''}`}
        >
          <div className="mb-6">
            <svg className="w-12 h-12 mx-auto text-[#8BC34A]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl mb-6">"{testimonial.quote}"</p>
          <div className="font-bold">{testimonial.author}</div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
