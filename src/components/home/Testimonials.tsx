import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    content: "I've been shopping at TechTreasure for my electronics needs for over a year now. Their selection is amazing, and the prices are competitive. Fast shipping every time!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Professional Gamer",
    content: "As a professional gamer, I need reliable equipment. TechTreasure delivers on quality every time. The gaming section has everything I need for my setup.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Photographer",
    content: "Found the perfect camera for my photography business here. The detailed specs and honest reviews helped me make the right choice. Excellent customer service!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to serve our community with quality products and service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6 transition-all duration-300 hover:shadow-lg
              opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < testimonial.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;