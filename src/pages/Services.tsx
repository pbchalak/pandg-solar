import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored for every property and energy requirement.
          </p>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Services;
