import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button>
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;