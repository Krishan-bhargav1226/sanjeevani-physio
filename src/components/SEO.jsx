import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  pageType = "WebPage",
  image = "https://sanjeevaniphysiohisar.com/images/hero_physio.png"
}) {
  const location = useLocation();
  const siteTitle = "Sanjeevani Physiotherapy Centre | Best Physiotherapist in Hisar";
  const defaultDesc = "Best Physiotherapist in Hisar Cantt, Haryana under Dr. Sohan Lal (BPT, MPTh Sports, CMT). Non-surgical treatment for Slip Disc, Sciatica, Knee Pain, Cervical, Frozen Shoulder & Paralysis Rehab.";
  const defaultKeywords = "Best Physiotherapist in Hisar, Physiotherapy Centre Hisar Cantt, Dr Sohan Lal Physiotherapy, Slip Disc Treatment Hisar, Sciatica Specialist Hisar, Knee Pain Doctor Hisar, Cervical Spondylosis Care Hisar, Stroke Rehab Hisar, Non Surgical Spine Clinic Hisar Cantt, Physiotherapist Near Me Hisar, Acupressure Hisar";

  // Build clean absolute canonical URL
  const pathname = location?.pathname || "";
  const currentUrl = canonicalUrl || `https://sanjeevaniphysiohisar.com${pathname === "/" ? "" : pathname}`;
  const fullTitle = title ? `${title} | Sanjeevani Physiotherapy Hisar` : siteTitle;
  const metaDesc = description || defaultDesc;
  const metaKeywords = keywords || defaultKeywords;
  const ogImageUrl = image.startsWith("http") ? image : `https://sanjeevaniphysiohisar.com${image}`;

  // Breadcrumb schema generator
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sanjeevaniphysiohisar.com/"
    }
  ];

  pathSegments.forEach((segment, idx) => {
    const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": segmentName,
      "item": `https://sanjeevaniphysiohisar.com/${pathSegments.slice(0, idx + 1).join("/")}`
    });
  });

  const jsonLdSchema = [
    {
      "@context": "https://schema.org",
      "@type": ["PhysiotherapyClinic", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://sanjeevaniphysiohisar.com/#clinic",
      "name": "Sanjeevani Physiotherapy Centre",
      "alternateName": [
        "Sanjeevani Physiotherapy Centre Hisar", 
        "Sanjeevani Physio Hisar Cantt",
        "Dr Sohan Lal Physiotherapy Clinic"
      ],
      "image": "https://sanjeevaniphysiohisar.com/images/hero_physio.png",
      "logo": "https://sanjeevaniphysiohisar.com/images/logo.png",
      "url": "https://sanjeevaniphysiohisar.com/",
      "telephone": "+919991070620",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
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
      "hasMap": "https://maps.google.com/?q=Sanjeevani+Physiotherapy+Centre+Hisar+Cantt",
      "sameAs": [
        "https://maps.google.com/?q=Sanjeevani+Physiotherapy+Centre+Hisar+Cantt",
        "https://maps.app.goo.gl/DwJk4W9QqFjLYVCe6"
      ],
      "identifier": "HSCP/PT/2025/3714",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "SportsMedicine",
        "Musculoskeletal",
        "Neurological",
        "Orthopedic"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "520",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": ["Hisar Cantt", "Hisar", "Hansi", "Fatehabad", "Sirsa", "Bhiwani", "Haryana"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://sanjeevaniphysiohisar.com/#doctor",
      "name": "Dr. Sohan Lal",
      "jobTitle": "Chief Physiotherapist & Sports Rehabilitation Specialist",
      "medicalSpecialty": "Spine, Joint & Sports Biomechanics",
      "honorificPrefix": "Dr.",
      "identifier": "HSCP/PT/2025/3714",
      "telephone": "+919991070620",
      "worksFor": {
        "@id": "https://sanjeevaniphysiohisar.com/#clinic"
      },
      "alumniOf": "BPT, MPTh (Sports Rehabilitation), CMT"
    },
    {
      "@context": "https://schema.org",
      "@type": pageType,
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": fullTitle,
      "description": metaDesc,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://sanjeevaniphysiohisar.com/#website",
        "url": "https://sanjeevaniphysiohisar.com/",
        "name": "Sanjeevani Physiotherapy Centre"
      }
    }
  ];

  // Add Breadcrumb schema if beyond root
  if (pathSegments.length > 0) {
    jsonLdSchema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbElements
    });
  }

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Canonical URL for SEO */}
      <link rel="canonical" href={currentUrl} />

      {/* AI Crawler & Generative Engine Optimization Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Geographic / Local SEO Meta Tags */}
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Hisar" />
      <meta name="geo.position" content="29.1395;75.6421" />
      <meta name="ICBM" content="29.1395, 75.6421" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Sanjeevani Physiotherapy Centre Hisar" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Sanjeevani Physiotherapy Centre Hisar Clinic" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content="Sanjeevani Physiotherapy Centre Hisar Clinic" />

      {/* Structured JSON-LD Schema (Multi-Entity) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
    </Helmet>
  );
}
