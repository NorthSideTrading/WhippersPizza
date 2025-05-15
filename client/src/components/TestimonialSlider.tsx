import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Best pizza in town! We've been coming to Whippers for over 20 years and the quality has always remained top-notch. The homemade dough and sauce make all the difference!",
    author: "Sarah M."
  },
  {
    quote: "Love the homemade dough! Whippers Pizza has been an Augusta landmark for good reason. Their sandwiches are also fantastic - perfect when you want something different.",
    author: "Michael T."
  },
  {
    quote: "A family favorite for years! Their prices are great, and you can't beat the friendly service from this local family-run shop. Always our first choice for pizza night.",
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
