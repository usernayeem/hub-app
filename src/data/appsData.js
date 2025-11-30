export const appsData = [
  {
    id: "hub-mobile",
    name: "HUB Mobile App",
    shortName: "HUB",
    fullName: "Hamdard University Bangladesh Mobile App",
    description:
      "Access your university portal, check grades, view schedules, and stay connected with campus life - all in one convenient webview mobile app.",
    icon: "/images/logo.webp",
    downloadLink: "/Hamdard University Bangladesh.apk",
    apkFileName: "Hamdard University Bangladesh.apk",
    primaryColor: "green",
    features: [
      {
        iconName: "FaRocket",
        title: "Easy Access",
        description:
          "Quick and simple access to university web portal through webview",
        bgColor: "bg-blue-100 dark:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        iconName: "FaBell",
        title: "Easy Navigation",
        description:
          "Intuitive interface design for effortless navigation through the app",
        bgColor: "bg-purple-100 dark:bg-purple-900/50",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        iconName: "FaMobile",
        title: "Mobile Optimized",
        description:
          "Perfectly designed and optimized for mobile devices and touch interface",
        bgColor: "bg-orange-100 dark:bg-orange-900/50",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        iconName: "FaGlobe",
        title: "WebView App",
        description:
          "Direct access to university website through integrated webview browser",
        bgColor: "bg-green-100 dark:bg-green-900/50",
        iconColor: "text-green-600 dark:text-green-400",
      },
    ],
    mockupImage: "/images/mockup.webp",
  },
  {
    id: "hub-library",
    name: "HUB Library",
    shortName: "Library",
    fullName: "HUB Library Management System",
    description:
      "The Library Management Web Application for Hamdard University Bangladesh (English Department) will enable the university's library to centrally manage books, borrowing records, and availability data.",
    icon: "/images/library.webp",
    downloadLink: "/HUB Library.apk",
    apkFileName: "HUB Library.apk",
    primaryColor: "blue",
    features: [
      {
        iconName: "FaBook",
        title: "Book Management",
        description:
          "View available books with details like title, author, category, and availability status",
        bgColor: "bg-blue-100 dark:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        iconName: "FaClipboardList",
        title: "Borrowing Records",
        description:
          "Track borrowed books with due dates and return status in real-time",
        bgColor: "bg-purple-100 dark:bg-purple-900/50",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        iconName: "FaUserShield",
        title: "Admin Controls",
        description:
          "Manage books, borrowing records, and user permissions with admin access",
        bgColor: "bg-orange-100 dark:bg-orange-900/50",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        iconName: "FaSearch",
        title: "Easy Search",
        description:
          "Quickly find books by title, author, or category with advanced search",
        bgColor: "bg-green-100 dark:bg-green-900/50",
        iconColor: "text-green-600 dark:text-green-400",
      },
    ],
    mockupImage: "/images/mockup.webp",
  },
];

export const getAppById = (id) => {
  return appsData.find((app) => app.id === id);
};

export const getAllApps = () => {
  return appsData;
};
