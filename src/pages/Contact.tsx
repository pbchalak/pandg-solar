import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { CONTACT_DETAILS } from '../constants';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions? We're here to help you transition to clean energy. Reach out to our team today.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark">
                <div className="bg-solar-gold w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-solar-navy" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-4">Call Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{CONTACT_DETAILS.phone1}</p>
                  <p>{CONTACT_DETAILS.phone2}</p>
                </div>
              </div>

              <div className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark">
                <div className="bg-solar-gold w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-solar-navy" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-4">Head Office</h3>
                <p className="text-gray-600">{CONTACT_DETAILS.headOffice}</p>
              </div>

              <div className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark">
                <div className="bg-solar-gold w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-solar-navy" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-4">Working Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-solar-grey-dark shadow-xl">
              <h3 className="text-3xl font-bold text-solar-navy mb-8">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="btn-primary w-full py-5 text-lg">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Coverage */}
      <section className="section-padding bg-solar-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-solar-navy mb-12">Our Branch Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CONTACT_DETAILS.branches.map(branch => (
              <div key={branch} className="bg-white p-6 rounded-2xl shadow-sm border border-solar-grey-dark hover:border-solar-gold transition-colors">
                <MapPin className="w-6 h-6 text-solar-gold mx-auto mb-3" />
                <p className="font-bold text-solar-navy">{branch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Contact;
