import React from "react";
import {
  FaDownload,
  FaLaptop,
  FaMobileAlt,
  FaSync,
  FaShieldAlt,
  FaClock
} from "react-icons/fa";

export const Features = () => {
  const leftFeatures = [
    {
      icon: <FaDownload className="text-blue-600 dark:text-blue-400 text-xl" />,
      title: "All-in-One Hub",
      description:
        "Centralized platform for downloading all Hamdard University Bangladesh software",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
    },
    {
      icon: <FaLaptop className="text-purple-600 dark:text-purple-400 text-xl" />,
      title: "Multi-Platform",
      description:
        "Support for Windows, Android, webview, and native applications",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
    },
    {
      icon: <FaMobileAlt className="text-orange-600 dark:text-orange-400 text-xl" />,
      title: "Mobile Friendly",
      description:
        "Access and download apps seamlessly from any mobile device",
      bgColor: "bg-orange-100 dark:bg-orange-900/50",
    },
  ];

  const rightFeatures = [
    {
      icon: <FaSync className="text-green-600 dark:text-green-400 text-xl" />,
      title: "Always Updated",
      description:
        "Latest versions of all university applications in one place",
      bgColor: "bg-green-100 dark:bg-green-900/50",
    },
    {
      icon: <FaShieldAlt className="text-red-600 dark:text-red-400 text-xl" />,
      title: "Safe & Secure",
      description:
        "Verified downloads directly from official university sources",
      bgColor: "bg-red-100 dark:bg-red-900/50",
    },
    {
      icon: <FaClock className="text-teal-600 dark:text-teal-400 text-xl" />,
      title: "Quick Access",
      description:
        "Fast downloads with no registration or complicated procedures",
      bgColor: "bg-teal-100 dark:bg-teal-900/50",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="space-y-12 lg:text-right order-2 lg:order-1">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-6 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-16 w-12 h-0.5 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-500 dark:to-green-300 transform -translate-y-1/2"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs hover:scale-105 transition-transform duration-300">
              <img
                src="/images/mockup.webp"
                alt="Hamdard University Bangladesh Apps Mockup"
                className="drop-shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-12 order-3">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-6 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -left-16 w-12 h-0.5 bg-gradient-to-l from-green-600 to-green-400 dark:from-green-500 dark:to-green-300 transform -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
