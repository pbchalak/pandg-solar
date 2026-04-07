import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const ContactSection = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-solar-blue rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="p-8 md:p-16 text-white space-y-12">
              <div>
                <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Start Your Solar Journey Today
                </h3>
                <p className="text-gray-300 text-lg">
                  Ready to switch to clean energy? Get in touch with our experts for a free consultation and site survey.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-solar-gold/20 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-white">Call Us</h4>
                    <p className="text-gray-400">{CONTACT_DETAILS.phone1}</p>
                    <p className="text-gray-400">{CONTACT_DETAILS.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-solar-gold/20 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-white">Head Office</h4>
                    <p className="text-gray-400">{CONTACT_DETAILS.headOffice}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-solar-gold/20 p-4 rounded-2xl">
                    <MessageCircle className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-white">WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solar-gold font-bold hover:underline"
                    >
                      Chat with an Expert
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">Serving Multiple Locations</p>
                <div className="flex flex-wrap gap-4">
                  {CONTACT_DETAILS.branches.map(branch => (
                    <span key={branch} className="bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300">
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Property Type</label>
                    <select className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all appearance-none cursor-pointer">
                      <option>Select Type</option>
                      <option>Residential</option>
                      <option>Agricultural</option>
                      <option>Educational</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Service Interested In</label>
                    <select className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all appearance-none cursor-pointer">
                      <option>Select Service</option>
                      <option>New Installation</option>
                      <option>Maintenance / AMC</option>
                      <option>Site Survey</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-navy uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-4 rounded-xl bg-solar-grey border border-solar-grey-dark focus:border-solar-gold outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-5 text-lg shadow-xl shadow-solar-gold/20"
                >
                  Get Free Quote
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
