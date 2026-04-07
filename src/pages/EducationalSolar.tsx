import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';
import { GraduationCap, Lightbulb, ShieldCheck, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

const EducationalSolar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" 
            alt="School Solar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Educational Solar Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              Empower your institution with clean energy. Reduce operational costs and inspire the next generation with sustainable technology.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Institutional Benefits</h2>
          <h3 className="text-4xl font-bold text-solar-navy mb-16">The Smart Choice for Schools & Colleges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cost Reduction", desc: "Redirect funds from electricity bills to educational resources.", icon: TrendingDown },
              { title: "Green Campus", desc: "Build a sustainable reputation and achieve green certifications.", icon: GraduationCap },
              { title: "Educational Value", desc: "Real-world example of renewable energy for students to study.", icon: Lightbulb }
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756eaa589?auto=format&fit=crop&q=80&w=800" 
                alt="University Building" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-solar-gold p-6 rounded-2xl shadow-xl">
                <ShieldCheck className="w-10 h-10 text-solar-navy" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-solar-navy">Why Choose P & G for Your Institution?</h2>
              <p className="text-gray-600 text-lg">
                We specialize in large-scale rooftop installations for educational campuses, ensuring safety and performance.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete campus energy audit and planning",
                  "Safe and professional installation team",
                  "Minimal disruption to campus activities",
                  "Long-term performance monitoring and AMC",
                  "Assistance with institutional subsidies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-solar-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-fit">
                Book a Consultation
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

export default EducationalSolar;
