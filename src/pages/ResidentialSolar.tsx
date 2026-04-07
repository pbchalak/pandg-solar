import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';
import { Home, Zap, ShieldCheck, IndianRupee, CheckCircle2, ArrowRight } from 'lucide-react';

const ResidentialSolar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
            alt="Home Solar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Residential Solar Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your home into a clean energy powerhouse. Save up to 90% on electricity bills with our premium rooftop solar installations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Get Free Quote</a>
              <a href="#benefits" className="btn-outline border-white text-white hover:bg-white/10">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Massive Savings", desc: "Drastically reduce or even eliminate your monthly electricity bills.", icon: IndianRupee },
              { title: "Energy Security", desc: "Enjoy uninterrupted power with our hybrid and off-grid solutions.", icon: Zap },
              { title: "Eco-Friendly", desc: "Reduce your carbon footprint and contribute to a greener planet.", icon: Home }
            ].map((item, i) => (
              <div key={i} className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark hover:border-solar-gold transition-colors">
                <item.icon className="w-12 h-12 text-solar-gold mb-6" />
                <h3 className="text-2xl font-bold text-solar-navy mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding bg-solar-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" 
                alt="Solar Panel Detail" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-solar-gold p-6 rounded-2xl shadow-xl">
                <p className="text-solar-navy font-bold text-center">
                  <span className="text-3xl block">25</span>
                  Years Warranty
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-solar-navy">Why Choose P & G for Your Home?</h2>
              <p className="text-gray-600 text-lg">
                We provide end-to-end support for residential solar, ensuring a hassle-free transition to clean energy.
              </p>
              <ul className="space-y-4">
                {[
                  "Customized system design based on roof space",
                  "High-efficiency Tier-1 solar panels",
                  "Complete subsidy and documentation support",
                  "Net metering installation and approval",
                  "Professional maintenance and cleaning services"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-solar-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-fit">
                Book a Site Visit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ResidentialSolar;
