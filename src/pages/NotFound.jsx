import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Home, ArrowLeft, Phone, Calendar } from "lucide-react";
import { clinic } from "../data/content";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg flex items-center justify-center px-4">
      <SEO
        title="404 - Page Not Found | Sanjeevani Physiotherapy Hisar"
        description="The page you are looking for does not exist. Return to Sanjeevani Physiotherapy & Slimming Centre Hisar."
      />

      <div className="max-w-xl w-full bg-surface rounded-3xl p-8 sm:p-12 border-2 border-slate-200 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 bg-softAccent text-primary rounded-3xl flex items-center justify-center mx-auto text-3xl font-extrabold font-display border border-primary/20 shadow-md">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black font-display text-textMain">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium">
            The page you are looking for does not exist or has been moved. Please return to the homepage using the buttons below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-surface hover:bg-slate-100 text-textMain text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border-2 border-slate-300 transition-all"
          >
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Book Appointment</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-muted">
          <p className="font-bold text-textMain">Sanjeevani Physiotherapy & Slimming Centre (Hisar Cantt)</p>
          <p className="mt-1">Helpline: <a href={`tel:${clinic.phones[0]}`} className="text-primary font-bold hover:underline">{clinic.phones[0]}</a> / <a href={`tel:${clinic.phones[1]}`} className="text-primary font-bold hover:underline">{clinic.phones[1]}</a></p>
        </div>
      </div>
    </div>
  );
}
