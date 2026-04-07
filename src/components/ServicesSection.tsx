import React from 'react';
import { motion } from 'motion/react';
import { Home, Sprout, GraduationCap, Building2, Wrench, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Home,
  Sprout,
  GraduationCap,
  Building2,
  Wrench,
  ClipboardCheck,
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-solar-navy">
              Comprehensive Solar Solutions for Every Need
            </h3>
          </div>
          <Link to="/services" className="btn-outline">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-solar-grey-dark hover:border-solar-gold transition-all duration-500"
              >
                <div className="p-8 space-y-6">
                  <div className="bg-solar-navy text-white w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-solar-gold group-hover:text-solar-navy transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-solar-navy">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center gap-2 text-solar-navy font-bold hover:text-solar-gold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-solar-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
