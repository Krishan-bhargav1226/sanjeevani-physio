import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords }) {
  const siteTitle = "Sanjeevani Physiotherapy & Slimming Centre | Best Physiotherapist in Hisar";
  const defaultDesc = "Best Physiotherapist in Hisar Cantt, Haryana under Dr. Sohan Lal (BPT, MPTh Sports, CMT). Non-surgical treatment for Slip Disc, Sciatica, Knee Pain, Cervical, Frozen Shoulder & Paralysis Rehab.";
  const defaultKeywords = "Best Physiotherapist in Hisar, Physiotherapy Centre Hisar Cantt, Dr Sohan Lal Physiotherapy, Slip Disc Treatment Hisar, Sciatica Specialist Hisar, Knee Pain Doctor Hisar, Cervical Spondylosis Care Hisar, Stroke Rehab Hisar, Non Surgical Spine Clinic Hisar Cantt, Physiotherapist Near Me Hisar";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "PhysiotherapyClinic",
    "name": "Sanjeevani Physiotherapy & Slimming Centre",
    "alternateName": ["Sanjeevani Physiotherapy Centre", "Sanjeevani Physio Hisar"],
    "image": "https://sanjeevaniphysio.com/images/logo.png",
    "url": "https://maps.app.goo.gl/DwJk4W9QqFjLYVCe6",
    "telephone": "+919991070620",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karan Singh Market, TCP-2, Near Krishna Devi Memorial Hospital",
      "addressLocality": "Hisar Cantt",
      "addressRegion": "Haryana",
      "postalCode": "125006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.1395,
      "longitude": 75.6421
    },
    "hasMap": "https://maps.app.goo.gl/DwJk4W9QqFjLYVCe6",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "Physiotherapy",
      "SportsMedicine",
      "Musculoskeletal",
      "Neurological"
    ],
    "physician": {
      "@type": "Physician",
      "name": "Dr. Sohan Lal",
      "jobTitle": "Chief Physiotherapist & Sports Rehabilitation Specialist",
      "medicalSpecialty": "Spine, Joint & Sports Biomechanics",
      "honorificPrefix": "Dr."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520"
    }
  };

  return (
    <Helmet>
      <title>{title ? `${title} | Sanjeevani` : siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | Sanjeevani` : siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content="/images/logo.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title ? `${title} | Sanjeevani` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      <meta property="twitter:image" content="/images/logo.png" />

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
    </Helmet>
  );
}
