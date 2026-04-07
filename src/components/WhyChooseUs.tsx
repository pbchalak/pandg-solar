import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, PiggyBank, FileText, Headphones, Layout, HardHat } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "End-to-End Solutions",
      desc: "From site survey to net metering, we handle everything for you.",
      icon: Layout,
    },
    {
      title: "Expert Consultation",
      desc: "Get professional advice on the best solar setup for your needs.",
      icon: Users,
    },
    {
      title: "Quality Installation",
      desc: "Our certified team ensures safe and professional setup every time.",
      icon: HardHat,
    },
    {
      title: "Cost-Saving Systems",
      desc: "Maximize your ROI with high-efficiency solar technology.",
      icon: PiggyBank,
    },
    {
      title: "Subsidy Support",
      desc: "Complete assistance with government documentation and subsidies.",
      icon: FileText,
    },
    {
      title: "After-Sales Service",
      desc: "Reliable maintenance and support to keep your system running.",
      icon: Headphones,
    },
  ];

  return (
    <section className="section-padding bg-solar-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-solar-navy mb-6">
            The Trusted Name in Premium Solar Solutions
          </h3>
          <p className="text-gray-600">
            We combine technical expertise with a customer-first approach to deliver solar systems that are built to last and designed to save.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-solar-grey-dark"
            >
              <div className="bg-solar-grey w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-solar-gold transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-solar-navy" />
              </div>
              <h4 className="text-xl font-bold text-solar-navy mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
