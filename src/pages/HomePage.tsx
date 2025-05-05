import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import SpecialOffer from '../components/home/SpecialOffer';
import NewArrivals from '../components/home/NewArrivals';
import Testimonials from '../components/home/Testimonials';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <SpecialOffer />
      <NewArrivals />
      <Testimonials />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;