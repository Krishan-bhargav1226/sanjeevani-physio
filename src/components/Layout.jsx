import React from "react";
import { Outlet } from "react-router-dom";
import FloatingNavbar from "./FloatingNavbar";
import SwissFooter from "./SwissFooter";
import FloatingActions from "./FloatingActions";

export default function Layout() {

  return (
    <div className="min-h-screen flex flex-col bg-bg text-textMain selection:bg-primary selection:text-white font-body overflow-x-hidden">
      {/* Floating Centered Pill Navbar */}
      <FloatingNavbar />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer & Floating Triggers */}
      <SwissFooter />
      <FloatingActions />
    </div>
  );
}
