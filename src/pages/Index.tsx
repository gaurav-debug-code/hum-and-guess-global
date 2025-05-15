
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowToPlay from '@/components/home/HowToPlay';
import CallToAction from '@/components/home/CallToAction';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowToPlay />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
