import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import FloatingNavbar from "./FloatingNavbar";
import SwissFooter from "./SwissFooter";
import FloatingActions from "./FloatingActions";

function PageFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-12 h-12 rounded-full bg-white p-1 shadow-lg border-2 border-emerald-500/40 animate-pulse flex items-center justify-center">
        <img src="/images/logo.png" alt="Loading" className="w-full h-full object-contain rounded-full" />
      </div>
      <div className="w-28 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-primary to-secondary animate-pulse rounded-full" />
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-textMain selection:bg-primary selection:text-white font-body overflow-x-hidden">
      {/* Floating Centered Pill Navbar */}
      <FloatingNavbar />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer & Floating Triggers */}
      <SwissFooter />
      <FloatingActions />
    </div>
  );
}
