
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    if (path.startsWith('#')) {
      // Handle anchor links with smooth scrolling
      if (window.location.pathname !== '/') {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        e.preventDefault();
        const element = document.getElementById(path.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle route links with client-side navigation
      e.preventDefault();
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-podDark border-t border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" onClick={(e) => handleNavigation('#home', e)} className="font-serif text-3xl font-black tracking-tighter text-white mb-6 block cursor-pointer">
              PODMARK<span className="text-podPurple">.</span>
            </a>
            <p className="text-white/40 mb-6 text-sm leading-relaxed max-w-xs">
              “We Don’t Just Market, We Create Impact.”
            </p>
            <div className="flex space-x-3">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                <a key={platform} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-podPurple hover:text-white transition-all border border-white/5">
                  <span className="sr-only">{platform}</span>
                  {/* Simplified Icons for now */}
                  <div className="w-3 h-3 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><a href="#home" onClick={(e) => handleNavigation('#home', e)} className="hover:text-podPurple transition-colors cursor-pointer">Home</a></li>
              <li><a href="#story" onClick={(e) => handleNavigation('#story', e)} className="hover:text-podPurple transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavigation('#services', e)} className="hover:text-podPurple transition-colors cursor-pointer">Services</a></li>
              <li><a href="/careers" onClick={(e) => handleNavigation('/careers', e)} className="hover:text-podPurple transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleNavigation('#contact', e)} className="hover:text-podPurple transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><a href="/strategy-consulting" onClick={(e) => handleNavigation('/strategy-consulting', e)} className="hover:text-podPurple transition-colors cursor-pointer">Strategy & Consulting</a></li>
              <li><a href="/development" onClick={(e) => handleNavigation('/development', e)} className="hover:text-podPurple transition-colors cursor-pointer">Development</a></li>
              <li><a href="/creative" onClick={(e) => handleNavigation('/creative', e)} className="hover:text-podPurple transition-colors cursor-pointer">Creative Services</a></li>
              <li><a href="/social-media" onClick={(e) => handleNavigation('/social-media', e)} className="hover:text-podPurple transition-colors cursor-pointer">Social Media Marketing</a></li>
              <li><a href="/ppc-advertising" onClick={(e) => handleNavigation('/ppc-advertising', e)} className="hover:text-podPurple transition-colors cursor-pointer">PPC Advertising</a></li>
              <li><a href="/seo-organic-growth" onClick={(e) => handleNavigation('/seo-organic-growth', e)} className="hover:text-podPurple transition-colors cursor-pointer">SEO & Organic Growth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-podPurple">📧</span>
                <a href="mailto:sales@podmark.in" className="hover:text-white transition-colors">sales@podmark.in</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-podPurple">📞</span>
                <div>
                  <p>+91 81055 75795</p>
                  <p>+91 81059 27495</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-podPurple">📍</span>
                <span>Udupi, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 space-y-4 md:space-y-0 text-center md:text-left">
          <p>PODMARK © 2025 – All Rights Reserved</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
