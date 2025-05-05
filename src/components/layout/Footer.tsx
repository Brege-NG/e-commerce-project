import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center p-3">
              <Truck className="w-10 h-10 text-blue-500 mr-3" />
              <div>
                <h4 className="font-semibold text-white">Free Shipping</h4>
                <p className="text-sm">On orders over $99</p>
              </div>
            </div>
            <div className="flex items-center p-3">
              <RotateCcw className="w-10 h-10 text-blue-500 mr-3" />
              <div>
                <h4 className="font-semibold text-white">30 Days Return</h4>
                <p className="text-sm">Money back guarantee</p>
              </div>
            </div>
            <div className="flex items-center p-3">
              <Shield className="w-10 h-10 text-blue-500 mr-3" />
              <div>
                <h4 className="font-semibold text-white">Secure Payments</h4>
                <p className="text-sm">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center p-3">
              <CreditCard className="w-10 h-10 text-blue-500 mr-3" />
              <div>
                <h4 className="font-semibold text-white">Flexible Payment</h4>
                <p className="text-sm">Multiple options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-500">Tech</span>Treasure
            </h3>
            <p className="mb-4">
              Your one-stop destination for all electronics, gaming, and tech accessories.
            </p>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-blue-400 transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-blue-400 transition-colors">My Account</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-blue-400 transition-colors">Order Tracking</Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-blue-400 transition-colors">Wishlist</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-blue-400 transition-colors">Support</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                <span>123 Tech Street, Digital City, 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <span>info@techtreasure.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Subscribe to Our Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TechTreasure. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0">
            <img 
              src="https://www.pngitem.com/pimgs/m/125-1257873_payment-options-icons-png-transparent-png.png" 
              alt="Payment Methods" 
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;