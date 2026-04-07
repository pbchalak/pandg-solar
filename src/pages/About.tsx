import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200" 
            alt="Solar Farm" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            P & G Solar Company is a leading provider of premium solar energy solutions, committed to powering a sustainable future for India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm">Our Purpose</h2>
                <h3 className="text-4xl font-bold text-solar-navy">Leading the Solar Revolution in Maharashtra</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded with a vision to make clean energy accessible to everyone, P & G Solar Company has grown into a trusted partner for residential, agricultural, and commercial solar projects. We believe that solar energy is not just an alternative; it's the future of energy independence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="bg-solar-grey w-12 h-12 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-solar-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-navy">Our Mission</h4>
                  <p className="text-sm text-gray-600">To provide high-quality, cost-effective solar solutions that empower our customers and protect the environment.</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-solar-grey w-12 h-12 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-solar-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-navy">Our Vision</h4>
                  <p className="text-sm text-gray-600">To be the most reliable and innovative solar energy company in India, setting benchmarks in quality and service.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=800" 
                alt="Solar Installation" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-solar-gold p-8 rounded-3xl z-20 hidden md:block">
                <p className="text-4xl font-bold text-solar-navy">10+</p>
                <p className="text-sm font-bold text-solar-navy uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar Matters */}
      <section className="section-padding bg-solar-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Why Solar Matters</h2>
          <h3 className="text-4xl font-bold text-solar-navy mb-12">The Smart Choice for a Greener Tomorrow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Energy Independence", desc: "Reduce reliance on the grid and protect yourself from rising electricity costs." },
              { title: "Environmental Impact", desc: "Solar energy is clean, renewable, and significantly reduces your carbon footprint." },
              { title: "Financial Savings", desc: "Enjoy long-term savings on electricity bills and benefit from government subsidies." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-solar-grey-dark">
                <CheckCircle2 className="w-10 h-10 text-solar-gold mx-auto mb-6" />
                <h4 className="text-xl font-bold text-solar-navy mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Commitment */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-solar-blue rounded-[2.5rem] p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Our Commitment to Excellence</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
              At P & G Solar, we don't just install panels; we build long-term relationships. Our team of certified engineers and technicians is dedicated to providing the highest level of service, from the initial site survey to ongoing maintenance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Award className="w-10 h-10 text-solar-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white">Quality Certified</h4>
                <p className="text-sm text-gray-500">ISO 9001:2015 Certified Company</p>
              </div>
              <div className="space-y-2">
                <Users className="w-10 h-10 text-solar-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white">Expert Team</h4>
                <p className="text-sm text-gray-500">50+ Certified Technicians</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="w-10 h-10 text-solar-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white">Long-Term Warranty</h4>
                <p className="text-sm text-gray-500">Up to 25 Years Performance Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
