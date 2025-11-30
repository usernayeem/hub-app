import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const About = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="bg-green-600 dark:bg-green-700 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-green-100 transition-colors mb-4"
          >
            <div className="hover:-translate-x-1 transition-transform duration-200">
              <FaArrowLeft />
            </div>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-white">About These Apps</h1>
          <p className="text-green-100 mt-2">
            Everything you need to know about HUB Mobile Apps
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            📱 Available Applications
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">HUB Mobile App</h4>
                <p>
                  Opens the official HUB website in a mobile-friendly way. Makes
                  it easier to check grades, schedules, and announcements on
                  your phone.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">HUB Library</h4>
                <p>
                  Library Management System for Hamdard University Bangladesh
                  (English Department). Manage books, borrowing records, and
                  track availability.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            🔒 Are They Safe?
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-8 hover:scale-105 transition-transform duration-300">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              <strong>Absolutely!</strong> Here's why you can trust these apps:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  🛡️
                </span>
                <span>
                  Your passwords and personal info stay between you and the
                  university systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  👀
                </span>
                <span>
                  HUB Mobile is a webview app - like a browser that only loads
                  the official website
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  💾
                </span>
                <span>No data is saved or stored by the apps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  🏛️
                </span>
                <span>Both apps connect to official university systems</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            💻 Who Developed These Apps?
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 hover:rotate-6 transition-transform duration-300">
                <img
                  src="https://i.ibb.co/KxyFtNwk/A-confident-young-ma.webp"
                  loading="lazy"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Md Nayeem
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  BA (English Dept.) student at Hamdard University Bangladesh
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a student who cares about making student life easier. I
              developed these apps to give everyone quicker, one-tap access to
              university resources and library management. It's my way of
              contributing to our amazing university community. 🎓
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            📋 Important Things to Know
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-8 hover:scale-105 transition-transform duration-300">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  ⚠️
                </span>
                <span>
                  These are <strong>student projects</strong> - not official
                  university apps
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  🏛️
                </span>
                <span>
                  The university didn't ask me to make these (but I hope they
                  like them!)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  📞
                </span>
                <span>
                  For official university questions, contact the university
                  directly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl hover:scale-125 hover:rotate-12 transition-transform duration-200">
                  💬
                </span>
                <span>For app related questions or suggestions, ask HUB-GPT</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            🤝 Questions or Problems?
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8 hover:scale-105 transition-transform duration-300">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm here to help! If you have any questions, suggestions, or run
              into problems:
            </p>
            <div className="space-y-3">
              <a
                href="mailto:mdnayeem14916@gmail.com"
                className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors hover:translate-x-2 duration-200"
              >
                <span className="text-xl hover:scale-125 transition-transform duration-200">
                  📧
                </span>
                <span className="font-medium">
                  Email me: mdnayeem14916@gmail.com
                </span>
              </a>
              <a
                href="https://www.facebook.com/md.nayeem.2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors hover:translate-x-2 duration-200"
              >
                <span className="text-xl hover:scale-125 transition-transform duration-200">
                  📱
                </span>
                <span className="font-medium">Message me on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
