import React from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Award, Users, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechTreasure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for premium electronics, gaming gear, and tech accessories since 2020.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2020, TechTreasure emerged from a simple vision: to make premium technology accessible to everyone. What started as a small online store has grown into a trusted destination for tech enthusiasts and casual users alike.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, competitive pricing, and exceptional customer service has helped us build a community of over 50,000 satisfied customers worldwide.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our product range and improve our services, staying true to our mission of bringing the latest and greatest in technology to your doorstep.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We carefully curate our product selection to ensure only the best makes it to our customers.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help you make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600">
                Shop with confidence knowing your transactions and data are always protected.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">123 Tech Street, Digital City, 10001</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@techtreasure.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;