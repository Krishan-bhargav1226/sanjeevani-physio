import React from "react";
import { clinic } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SwissFooter() {
  return (
    <footer className="bg-darkSection text-slate-300 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-md flex-shrink-0">
                <img src="/images/logo.png" alt="Sanjeevani Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="text-xl font-extrabold font-display text-white tracking-tight">
                SANJEEVANI
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Sanjeevani Physiotherapy & Slimming Centre is a modern, evidence-based healthcare practice in Hisar Cantt dedicated to non-surgical joint, spine & rehabilitation care under Dr. Sohan Lal.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <p className="font-semibold text-white">{clinic.doctor} ({clinic.doctorCreds})</p>
              <p>{clinic.doctorRole} • {clinic.doctorExperience}</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-secondary font-bold">Navigation</p>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Clinical Specialties</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Dr. Sohan Lal Profile</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Recovery Method</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Patient Stories</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-secondary font-bold">Contact & Location</p>
            <div className="space-y-2 text-xs text-slate-300">
              <p>{clinic.address}</p>
              <p className="font-semibold text-white">Helplines: {clinic.phones[0]} / {clinic.phones[1]}</p>
              <p className="text-slate-400">Clinic Hours: Mon - Sat (9:00 AM - 8:00 PM)</p>
            </div>
            
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1 text-xs font-bold text-secondary hover:text-white"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} SANJEEVANI PHYSIOTHERAPY & SLIMMING CENTRE. All Rights Reserved.</p>
          <p>Hisar Cantt, Haryana 125006</p>
        </div>

      </div>
    </footer>
  );
}
