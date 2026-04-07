import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ResidentialSolar from './pages/ResidentialSolar';
import AgriculturalSolar from './pages/AgriculturalSolar';
import EducationalSolar from './pages/EducationalSolar';
import CommercialSolar from './pages/CommercialSolar';
import Services from './pages/Services';
import Projects from './pages/Projects';

// Placeholder for other pages to ensure routing works
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-solar-grey">
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-solar-navy">{title}</h1>
      <p className="text-gray-600">This page is coming soon.</p>
      <a href="/" className="btn-primary inline-flex">Back to Home</a>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services/residential" element={<ResidentialSolar />} />
        <Route path="/services/agricultural" element={<AgriculturalSolar />} />
        <Route path="/services/educational" element={<EducationalSolar />} />
        <Route path="/services/commercial" element={<CommercialSolar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services/residential" element={<Placeholder title="Residential Solar" />} />
        <Route path="/services/agricultural" element={<Placeholder title="Agricultural Solar" />} />
        <Route path="/services/educational" element={<Placeholder title="Educational Solar" />} />
        <Route path="/services/commercial" element={<Placeholder title="Commercial & Industrial Solar" />} />
        <Route path="/services/maintenance" element={<Placeholder title="Solar Maintenance & AMC" />} />
        <Route path="/services/consultation" element={<Placeholder title="Site Survey & Consultation" />} />
      </Routes>
    </Router>
  );
}
