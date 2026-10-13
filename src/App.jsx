import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";

// Route-level dynamic code splitting for optimal Vercel initial bundle
const Treatments = React.lazy(() => import("./pages/Treatments"));
const About = React.lazy(() => import("./pages/About"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="about" element={<About />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  );
}
