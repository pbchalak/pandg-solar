import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';
import { Sprout, Zap, Droplets, Sun, CheckCircle2, ArrowRight } from 'lucide-react';

const AgriculturalSolar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200" 
            alt="Farm Solar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Agricultural Solar Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              Empower your farm with sustainable energy. High-performance solar water pumps and irrigation systems for modern agriculture.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Get Free Quote</a>
              <a href="#solutions" className="btn-outline border-white text-white hover:bg-white/10">Our Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Farm Solutions</h2>
            <h3 className="text-4xl font-bold text-solar-navy">Smart Energy for Smart Farming</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Solar Water Pumps", desc: "Reliable irrigation without fuel costs or grid dependence.", icon: Droplets },
              { title: "Farm Utility Power", desc: "Power for processing units, storage, and farm equipment.", icon: Zap },
              { title: "Rural Electrification", desc: "Sustainable power for remote farm houses and sheds.", icon: Sun }
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
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-solar-navy">Why Agricultural Solar?</h2>
              <p className="text-gray-600 text-lg">
                Solar energy is a game-changer for farmers, offering long-term reliability and zero operational costs.
              </p>
              <ul className="space-y-4">
                {[
                  "Zero fuel and electricity costs for irrigation",
                  "Increased crop yield with timely watering",
                  "Low maintenance and high durability",
                  "Government subsidies for solar pumps",
                  "Energy independence for remote locations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-solar-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-fit">
                Book a Site Survey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1595841696677-54897f28bc12?auto=format&fit=crop&q=80&w=800" 
                alt="Solar Pump" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 bg-solar-gold p-6 rounded-2xl shadow-xl">
                <Sprout className="w-10 h-10 text-solar-navy" />
              </div>
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

export default AgriculturalSolar;
