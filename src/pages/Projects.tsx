import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';

const projects = [
  { title: "Residential Rooftop", loc: "Kolhapur", size: "5kW", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
  { title: "Agricultural Pump", loc: "Chandgad", size: "3HP", image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600" },
  { title: "School Installation", loc: "Gadhinglaj", size: "10kW", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" },
  { title: "Commercial Office", loc: "Sangli", size: "25kW", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { title: "Industrial Plant", loc: "Jaisinghpur", size: "100kW", image: "https://images.unsplash.com/photo-1559302995-f0a16a50083c?auto=format&fit=crop&q=80&w=600" },
  { title: "Home Hybrid System", loc: "Kolhapur", size: "3kW", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600" },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-solar-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our recent solar installations across Maharashtra.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-blue via-solar-blue/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-solar-gold font-bold text-xs uppercase tracking-widest mb-1">{project.size} System</p>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.loc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Projects;
