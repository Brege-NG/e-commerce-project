import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Gamepad, Tv, Watch } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'computers',
    name: 'Computers',
    icon: <Laptop className="w-8 h-8" />,
    color: 'bg-blue-500',
    count: 42
  },
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'bg-purple-500',
    count: 38
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: <Headphones className="w-8 h-8" />,
    color: 'bg-red-500',
    count: 24
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: <Gamepad className="w-8 h-8" />,
    color: 'bg-green-500',
    count: 56
  },
  {
    id: 'electronics',
    name: 'TVs',
    icon: <Tv className="w-8 h-8" />,
    color: 'bg-yellow-500',
    count: 19
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: <Watch className="w-8 h-8" />,
    color: 'bg-indigo-500',
    count: 67
  }
];

const CategorySection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Top Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across popular categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col items-center justify-center p-6
                opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className={`${category.color} text-white p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm text-gray-500">{category.count} Products</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;