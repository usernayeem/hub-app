import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const ErrorPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 80px)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <motion.div className="mb-8" variants={itemVariants}>
          {/* 404 Text */}
          <motion.h1
            className="text-6xl font-bold text-gray-900 dark:text-white mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h2>
        </motion.div>

        {/* Error Message */}
        <motion.div className="mb-8" variants={itemVariants}>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors duration-200 w-full justify-center shadow-md dark:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <FaHome className="text-lg" />
              </motion.div>
              Go Back Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
