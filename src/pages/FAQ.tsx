import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { motion } from 'motion/react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about solar energy, installation, and maintenance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border border-solar-grey-dark rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-solar-grey transition-colors"
                >
                  <span className="text-lg font-bold text-solar-navy flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-solar-gold" />
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-solar-gold shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-solar-gold shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-solar-grey-dark">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 bg-solar-grey p-8 rounded-3xl text-center border border-solar-grey-dark">
            <h3 className="text-2xl font-bold text-solar-navy mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8">
              Our experts are ready to help you with any specific queries you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="https://wa.me/+918806417161" className="btn-outline">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default FAQ;
