import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../constants';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Sticky Call Button (Mobile Only) */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${CONTACT_DETAILS.phone1.replace(/\s/g, '')}`}
        className="md:hidden bg-solar-navy text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Book Visit Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="/contact"
        className="bg-solar-gold text-solar-navy p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-solar-gold-light transition-colors"
        title="Book Site Visit"
      >
        <Calendar className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingActions;
