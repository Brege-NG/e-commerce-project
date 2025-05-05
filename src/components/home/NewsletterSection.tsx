import React, { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would send this to a backend
    }
  };
  
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with TechTreasure</h2>
          <p className="text-blue-200 mb-8">
            Subscribe to our newsletter to receive the latest news, exclusive offers, and tech updates.
          </p>
          
          {subscribed ? (
            <div className="bg-blue-800 p-6 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p className="text-blue-200">
                You'll now receive our latest updates and offers directly in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                required
              />
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white sm:px-6"
              >
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-sm text-blue-300 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;