import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex justify-between items-center p-4 shadow-md border-b border-gray-200 dark:border-gray-700 h-20 sticky top-0 z-40 backdrop-blur-sm bg-gray-50/95 dark:bg-gray-800/95"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to={"/"} className="flex items-center gap-2">
        <motion.div
          className="w-12 rounded z-10"
          variants={logoVariants}
          whileHover="hover"
        >
          <img
            src="/images/logo.webp"
            loading="lazy"
            alt="logo"
            className="rounded shadow-sm"
          />
        </motion.div>
        <motion.span
          className="font-bold text-green-600 dark:text-green-500 text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          HUB Softwares
        </motion.span>
      </Link>
    </motion.div>
  );
};