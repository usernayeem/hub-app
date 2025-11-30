import React from "react";
import { FaFacebook, FaEnvelope, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-green-600 dark:bg-green-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Student for Students */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-white mb-2">
            📚 Developed by Student, Developed for Students
          </p>
          <p className="text-white">
            These app is developed with passion to help fellow students access
            university resources easily. For more information click{" "}
            <Link
              to="/about"
              className="text-blue-700 hover:text-blue-800 underline font-semibold transition-colors"
            >
              Here
            </Link>
          </p>
        </div>

        {/* Developer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Developer */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              About Developer
            </h3>
            <p className="text-white mb-2">
              <strong>Md Nayeem</strong>
            </p>
            <p className="text-sm text-white mb-4">
              BA (English Dept.) student at Hamdard University Bangladesh
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:mdnayeem14916@gmail.com"
                className="flex items-center gap-2 text-white hover:text-green-100 transition-colors justify-center md:justify-start"
              >
                <FaEnvelope className="text-sm" />
                <span className="text-sm">mdnayeem14916@gmail.com</span>
              </a>
              <p className="flex items-center gap-2 text-white justify-center md:justify-start">
                <span className="text-sm">📍 Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 text-white justify-center md:justify-start">
                <span className="text-sm">
                  🎓 Hamdard University Bangladesh
                </span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/md.nayeem.2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com/usernayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-4 border-t border-green-500 dark:border-green-600">
          <div className="space-y-4 sm:space-y-0 w-full">
            <p className="text-sm text-white text-center">
              © {new Date().getFullYear()} HUB Mobile App. Made with ❤️ by Md
              Nayeem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
