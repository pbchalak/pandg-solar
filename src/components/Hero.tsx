import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { CONTACT_DETAILS, SERVICES } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
          alt="Solar Panels"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-blue via-solar-blue/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-solar-gold/20 border border-solar-gold/30 px-4 py-2 rounded-full text-solar-gold font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              Trusted Solar Installation Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white">
              Power Your Property with <span className="text-solar-gold">Smart Solar</span> Energy
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              P & G Solar Company delivers premium solar installation and energy solutions for residential, agricultural, educational, and commercial spaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Book Site Visit
              </motion.button>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:items-center">
              <div className="flex items-center gap-3">
                <div className="bg-solar-gold p-2 rounded-full">
                  <Phone className="w-5 h-5 text-solar-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Call Now</p>
                  <p className="font-bold text-white">{CONTACT_DETAILS.phone1}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-solar-gold p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-solar-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Serving</p>
                  <p className="font-bold text-white">{CONTACT_DETAILS.branches.join(' | ')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges / Quick Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-solar-navy">Get a Free Quote</h3>
              <p className="text-gray-600 text-sm">Fill in the details and our experts will contact you within 24 hours.</p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-colors">
                  <option>Property Type</option>
                  <option>Home</option>
                  <option>Farm</option>
                  <option>School</option>
                  <option>Commercial</option>
                </select>
                <button className="btn-primary w-full py-4 text-lg">
                  Get Free Quote
                </button>
              </form>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-solar-grey-dark">
                <div className="flex items-center gap-2 text-xs font-bold text-solar-navy">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Expert Installation
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-solar-navy">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Subsidy Assistance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
