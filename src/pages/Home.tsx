import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { Testimonials } from '../components/sections/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
    </>
  );
};