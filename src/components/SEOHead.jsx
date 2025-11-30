import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hamdard University Bangladesh Softwares Hub",
    alternateName: "HUB Softwares",
    description:
      "Official software download platform for Hamdard University Bangladesh. Download applications including HUB Mobile App, HUB Library, and other university software for Windows, Android, and web platforms.",
    url: window.location.origin,
    publisher: {
      "@type": "EducationalOrganization",
      name: "Hamdard University Bangladesh",
      url: "https://www.hamdarduniversity.edu.bd/",
    },
    inLanguage: "en-BD",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    keywords:
      "Hamdard University Bangladesh, HUB apps, university software, mobile apps, HUB Mobile App, HUB Library, student apps, educational software, Bangladesh university apps, free download, Android apps, Windows apps, webview apps, Md Nayeem",
    author: {
      "@type": "Person",
      name: "Md Faiaz Ibne Omar Nayeem",
      description: "Student Developer at Hamdard University Bangladesh",
      url: `${window.location.origin}/about`,
      jobTitle: "Full Stack Developer",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Hamdard University Bangladesh",
      },
    },
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "HUB Mobile App",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android",
        description:
          "Mobile application providing easy access to Hamdard University Bangladesh website for students, teachers, staff, and administrators",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "HUB Library",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android",
        description:
          "Library Management System for Hamdard University Bangladesh English Department to manage books, borrowing records, and availability",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT",
        },
      },
    ],
    audience: [
      {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      {
        "@type": "EducationalAudience",
        educationalRole: "teacher",
      },
      {
        "@type": "Audience",
        audienceType: "university staff",
      },
      {
        "@type": "Audience",
        audienceType: "university administrators",
      },
    ],
    disclaimer:
      "These applications are independent student projects and are not officially affiliated with or endorsed by Hamdard University Bangladesh. The apps provide convenient access to university resources and services.",
  };

  return (
    <Helmet>
      <title>
        Hamdard University Bangladesh Softwares Hub - Download Apps
      </title>
      <meta
        name="description"
        content="Download official applications for Hamdard University Bangladesh. Get HUB Mobile App, HUB Library, and other university software. Free downloads for Android, Windows, and web platforms."
      />

      <meta
        name="keywords"
        content="Hamdard University Bangladesh apps, HUB software download, university mobile apps, HUB Mobile App, HUB Library, student applications, educational software Bangladesh, free university apps, Android apps Bangladesh, Md Nayeem"
      />

      <link rel="canonical" href={window.location.origin} />

      <meta property="og:site_name" content="HUB Softwares Hub" />
      <meta
        property="og:title"
        content="Hamdard University Bangladesh Softwares Hub"
      />
      <meta
        property="og:description"
        content="Download all applications for Hamdard University Bangladesh - HUB Mobile App, HUB Library, and more. Free downloads for students, teachers, and staff."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta
        property="og:image"
        content={`${window.location.origin}/images/logo.webp`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Hamdard University Bangladesh Softwares Hub Logo"
      />
      <meta property="og:locale" content="en_BD" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Hamdard University Bangladesh Softwares Hub"
      />
      <meta
        name="twitter:description"
        content="Download all applications for Hamdard University Bangladesh - HUB Mobile App, HUB Library, and more. Free downloads available."
      />
      <meta
        name="twitter:image"
        content={`${window.location.origin}/images/logo.webp`}
      />
      <meta
        name="twitter:image:alt"
        content="Hamdard University Bangladesh Softwares Hub Logo"
      />

      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta name="theme-color" content="#16a34a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="HUB Softwares Hub"
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEOHead;
