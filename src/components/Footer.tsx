import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { CONTACT_DETAILS, SERVICES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-solar-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-solar-blue p-1.5 rounded-lg">
                <Sun className="w-6 h-6 text-solar-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">
                  P & G SOLAR
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-solar-gold">
                  No. 1 Solar EPC Company
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium solar energy solutions for homes, farms, schools, and businesses. 
              Leading the transition to clean energy in Maharashtra.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-gold hover:text-solar-navy transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-gold hover:text-solar-navy transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-gold hover:text-solar-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-solar-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-solar-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-solar-gold">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-solar-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-solar-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-solar-gold shrink-0" />
                <span className="text-sm">
                  {CONTACT_DETAILS.headOffice}
                </span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-solar-gold shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`tel:${CONTACT_DETAILS.phone1.replace(/\s/g, '')}`} className="hover:text-solar-gold">
                    {CONTACT_DETAILS.phone1}
                  </a>
                  <a href={`tel:${CONTACT_DETAILS.phone2.replace(/\s/g, '')}`} className="hover:text-solar-gold">
                    {CONTACT_DETAILS.phone2}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-solar-gold shrink-0" />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-sm hover:text-solar-gold">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
            <span className="text-solar-gold">Our Branches:</span>
            {CONTACT_DETAILS.branches.map((branch) => (
              <span key={branch}>{branch}</span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} P & G Solar Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-solar-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-solar-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
