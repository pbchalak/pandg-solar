import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';
import { Building2, Zap, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const CommercialSolar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Commercial Solar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Commercial & Industrial Solar</h1>
            <p className="text-xl text-gray-200 mb-8">
              Maximize your business ROI with clean energy. High-capacity solar installations for factories, offices, and warehouses.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Get Free Quote</a>
              <a href="#benefits" className="btn-outline border-white text-white hover:bg-white/10">Business Benefits</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Business Value</h2>
          <h3 className="text-4xl font-bold text-solar-navy mb-16">The Strategic Choice for Modern Business</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "High ROI", desc: "Significant reduction in operational costs with a quick payback period.", icon: TrendingUp },
              { title: "Tax Benefits", desc: "Avail accelerated depreciation and other tax incentives for solar.", icon: Building2 },
              { title: "Energy Stability", desc: "Protect your business from rising energy tariffs and grid instability.", icon: Zap }
            ].map((item, i) => (
              <div key={i} className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark hover:border-solar-gold transition-colors">
                <item.icon className="w-12 h-12 text-solar-gold mx-auto mb-6" />
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
              <h2 className="text-4xl font-bold text-solar-navy">Industrial Grade Solar Solutions</h2>
              <p className="text-gray-600 text-lg">
                We handle complex industrial solar projects with precision, ensuring maximum energy yield and safety.
              </p>
              <ul className="space-y-4">
                {[
                  "Large-scale rooftop and ground-mount systems",
                  "Advanced monitoring and data analytics",
                  "Custom engineering for industrial loads",
                  "Comprehensive AMC and performance guarantees",
                  "Assistance with open access and net metering"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-solar-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-fit">
                Request a Site Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559302995-f0a16a50083c?auto=format&fit=crop&q=80&w=800" 
                alt="Industrial Solar" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-solar-gold p-6 rounded-2xl shadow-xl">
                <ShieldCheck className="w-10 h-10 text-solar-navy" />
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

export default CommercialSolar;
