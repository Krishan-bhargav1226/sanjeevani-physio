import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords }) {
  const siteTitle = "Sanjeevani Physiotherapy & Slimming Centre | Hisar";
  const defaultDesc = "Premium non-surgical joint, spine & rehabilitation care in Hisar Cantt under Dr. Sohan Lal (BPT, MPTh Sports, CMT).";
  const defaultKeywords = "Physiotherapy Hisar, Back Pain Treatment, Knee Pain, Sciatica Doctor Hisar, Dr. Sohan Lal, Stroke Rehab, Slimming Centre Hisar Cantt";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Sanjeevani Physiotherapy & Slimming Centre",
    "alternateName": "Sanjeevani Physio Hisar",
    "image": "/images/logo.png",
    "telephone": "+919991070620",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "Physiotherapy",
      "SportsMedicine",
      "Musculoskeletal"
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Sohan Lal",
      "jobTitle": "Chief Physiotherapist & Certified Manual Therapist",
      "honorificPrefix": "Dr."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
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
