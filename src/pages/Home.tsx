import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import SectorsSection from '../components/SectorsSection';
import ContactSection from '../components/ContactSection';
import SolarCalculator from '../components/SolarCalculator';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, PencilRuler, HardHat, ShieldCheck, Headphones, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../constants';

const Home = () => {
  const steps = [
    { title: "Free Consultation", icon: ClipboardCheck, desc: "Expert advice on the best solar solution for your property." },
    { title: "Site Survey", icon: PencilRuler, desc: "Detailed technical assessment of your roof and energy needs." },
    { title: "Custom Design", icon: PencilRuler, desc: "Personalized solar system design for maximum efficiency." },
    { title: "Professional Installation", icon: HardHat, desc: "Safe and expert setup by our certified installation team." },
    { title: "Support & Maintenance", icon: Headphones, desc: "Ongoing monitoring and maintenance for long-term performance." },
  ];

  const testimonials = [
    { name: "Rahul Deshmukh", loc: "Kolhapur", text: "P & G Solar provided excellent service. My electricity bill has dropped by 80% since installation.", rating: 5 },
    { name: "Sanjay Patil", loc: "Chandgad", text: "Very professional team. They handled all the subsidy paperwork for my farm solar pump.", rating: 5 },
    { name: "Meena Kulkarni", loc: "Sangli", text: "The installation was quick and clean. Highly recommend them for residential solar.", rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Trust Stats */}
      <section className="bg-solar-blue py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-solar-gold mb-1">500+</p>
              <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">Projects Done</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-solar-gold mb-1">10+</p>
              <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">Years Exp.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-solar-gold mb-1">98%</p>
              <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-solar-gold mb-1">24/7</p>
              <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">Support</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ServicesSection />
      <SectorsSection />

      {/* Savings Calculator Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm">Solar Savings</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-solar-navy">Calculate Your Potential Savings</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Switching to solar is one of the best financial decisions you can make. Use our calculator to estimate the system size you need and how much you can save on your electricity bills.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduce bills by up to 90%",
                  "Protection against rising energy costs",
                  "Increase property value",
                  "Government subsidy benefits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-solar-navy font-bold">
                    <CheckCircle2 className="w-5 h-5 text-solar-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-solar-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-solar-navy/5 rounded-full blur-3xl"></div>
              <SolarCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-solar-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-solar-navy mb-6">How We Power Your Property</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center space-y-4">
                <div className="bg-white w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-auto relative z-10 border border-solar-grey-dark">
                  <step.icon className="w-10 h-10 text-solar-navy" />
                  <div className="absolute -top-2 -right-2 bg-solar-gold text-solar-navy w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-solar-navy">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-solar-gold/20 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-solar-navy mb-6">What Our Clients Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-solar-grey p-8 rounded-3xl border border-solar-grey-dark space-y-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-solar-gold text-solar-gold" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-solar-navy">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-solar-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-solar-gold font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-solar-navy mb-6">Common Questions</h3>
              <p className="text-gray-600 mb-8">
                Find answers to the most common questions about solar installation, subsidies, and maintenance.
              </p>
              <Link to="/faq" className="btn-primary w-fit">
                View All FAQs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              {FAQS.slice(0, 3).map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-solar-grey-dark">
                  <h4 className="font-bold text-solar-navy mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Home;
