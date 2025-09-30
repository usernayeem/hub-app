import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Hamdard University Bangladesh Mobile App",
    alternateName: "HUB App",
    description:
      "Mobile application providing easy access to Hamdard University Bangladesh website for the entire university community - students, teachers, staff, and administrators",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android",
    downloadUrl: "https://hamdarduniversitybangladesh.netlify.app/",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BDT",
    },
    screenshot: `${window.location.origin}/images/mockup.webp`,
    logo: `${window.location.origin}/images/logo.webp`,
    datePublished: "2025-10-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-BD",
    author: {
      "@type": "Person",
      name: "Md Faiaz Ibne Omar Nayeem",
      description: "Student Developer at Hamdard University Bangladesh",
      url: "https://hamdarduniversitybangladesh.netlify.app/about",
      Title: "Full Stack Developer",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Hamdard University Bangladesh",
      },
    },
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
    keywords:
      "HUB app, Hamdard University Bangladesh, mobile app, university portal, academic app, teachers, students, staff, administrators, university community, mobile website access, Md Nayeem, university app Bangladesh",

    disclaimer:
      "This mobile application is an independent student project and is not officially affiliated with or endorsed by Hamdard University Bangladesh. The app provides convenient access to the university's public website through a webview interface.",
  };

  return (
    <Helmet>
      <title>HUB Mobile App</title>
      <meta
        name="description"
        content="Mobile app for Hamdard University Bangladesh students. Developed by student developer Md Faiaz Ibne Omar Nayeem. Free download for easy portal access."
      />

      {/* Open Graph tags */}
      <meta
        property="og:title"
        content="HUB App - Mobile App for Hamdard University Bangladesh"
      />
      <meta
        property="og:description"
        content="HUB App - Mobile app for Hamdard University Bangladesh"
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
        content="Hamdard University Bangladesh Mobile App Logo"
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="HUB App - Mobile app for Hamdard University Bangladesh"
      />
      <meta
        name="twitter:description"
        content="HUB App - Mobile app for Hamdard University Bangladesh"
      />

      <meta
        name="twitter:image"
        content={`${window.location.origin}/images/logo.webp`}
      />
      <meta
        name="twitter:image:alt"
        content="Hamdard University Bangladesh Mobile App Logo"
      />

      {/* Schema markup */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEOHead;
