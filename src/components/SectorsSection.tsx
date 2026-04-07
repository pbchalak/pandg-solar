import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    title: "Residential",
    subtitle: "Homes & Rooftops",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    benefits: ["Lower Electricity Bills", "24/7 Power Backup", "Subsidy Assistance"],
    path: "/services/residential"
  },
  {
    title: "Agricultural",
    subtitle: "Farms & Rural Utility",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
    benefits: ["Solar Water Pumps", "Irrigation Support", "Energy Independence"],
    path: "/services/agricultural"
  },
  {
    title: "Educational",
    subtitle: "Schools & Institutions",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    benefits: ["Reduced Operational Costs", "Green Campus Status", "Educational Value"],
    path: "/services/educational"
  },
  {
    title: "Commercial",
    subtitle: "Offices & Industries",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    benefits: ["High ROI", "Tax Benefits", "Corporate Responsibility"],
    path: "/services/commercial"
  }
];

const SectorsSection = () => {
  return (
    <section className="section-padding bg-solar-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Solar Solutions by Sector</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tailored Energy for Every Property
          </h3>
          <p className="text-gray-300">
            Whether it's your home, farm, or business, we design solar systems that match your specific energy requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden"
            >
              <img 
                src={sector.image} 
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-blue via-solar-blue/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                  <div>
                    <p className="text-solar-gold font-bold text-sm uppercase tracking-wider">{sector.subtitle}</p>
                    <h4 className="text-3xl font-bold text-white">{sector.title}</h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {sector.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-solar-gold" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={sector.path}
                    className="btn-primary w-fit py-2 px-6 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
