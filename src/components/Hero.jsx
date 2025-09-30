import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaShare, FaTimes, FaCopy } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { useDownloadContext } from "../context/downloadContext";

export const Hero = () => {
  const { downloads, handleDownload, loading } = useDownloadContext();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const appUrl = window.location.href;
  const shareMessage = `🎓 Check out the Hamdard University Bangladesh Mobile App! Easy access to university portal, grades, schedules & more. Download now: ${appUrl}`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const countVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const shareIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Hamdard University Bangladesh Mobile App",
          text: shareMessage,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          setShowShareModal(true);
        }
      }
    } else {
      setShowShareModal(true);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = shareMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <motion.div
      className="text-center py-12 bg-white dark:bg-gray-900 transition-colors"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* App Icon with Shadow */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl drop-shadow-lg"
          variants={logoVariants}
          whileHover="hover"
        >
          <img
            src="/images/logo.webp"
            loading="lazy"
            alt="Hamdard University Bangladesh Logo"
            className="rounded drop-shadow-lg"
          />
        </motion.div>

        {/* Downloads Count */}
        <motion.div className="mb-8" variants={countVariants}>
          <motion.span
            className="text-green-600 dark:text-green-400 font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            {downloads}
          </motion.span>
          <motion.span
            className="text-gray-600 dark:text-gray-400 ml-1 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {downloads === 0
              ? "Downloads"
              : downloads === 1
              ? "Download"
              : "Downloads"}
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-green-600 mb-4"
          variants={titleVariants}
        >
          <motion.span
            className="block sm:hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            HUB
          </motion.span>
          <motion.span
            className="hidden sm:block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Hamdard University Bangladesh
          </motion.span>
          <motion.span
            className="text-gray-900 dark:text-white block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Mobile App
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed px-4 max-w-2xl mx-auto"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          Access your university portal, check grades, view schedules, and stay
          connected with campus life - all in one convenient webview mobile app.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Download Button */}
          <motion.a
            onClick={handleDownload}
            href="/HamdardUniversityBangladesh.apk"
            download
            className={`bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors ${
              loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <motion.div
              animate={loading ? { rotate: 360 } : { rotate: 0 }}
              transition={
                loading
                  ? {
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  : { duration: 0.3 }
              }
            >
              <FaAndroid className="text-lg" />
            </motion.div>
            {loading ? "Downloading..." : "Download for Android"}
          </motion.a>

          {/* Share Button */}
          <motion.button
            onClick={handleShare}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <FaShare className="text-lg" />
            Share App
          </motion.button>
        </motion.div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowShareModal(false)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <motion.h3
                className="text-xl font-semibold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Share App
              </motion.h3>
              <motion.button
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-xl" />
              </motion.button>
            </div>

            {/* Message Preview */}
            <motion.div
              className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {shareMessage}
            </motion.div>

            {/* Social Share Options */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div variants={shareIconVariants} whileHover="hover">
                <FacebookShareButton
                  url={appUrl}
                  quote={shareMessage}
                  className="flex flex-col items-center"
                >
                  <FacebookIcon size={48} round />
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                    Facebook
                  </span>
                </FacebookShareButton>
              </motion.div>

              <motion.div variants={shareIconVariants} whileHover="hover">
                <TwitterShareButton
                  url={appUrl}
                  title={shareMessage}
                  className="flex flex-col items-center"
                >
                  <TwitterIcon size={48} round />
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                    Twitter
                  </span>
                </TwitterShareButton>
              </motion.div>

              <motion.div variants={shareIconVariants} whileHover="hover">
                <WhatsappShareButton
                  url={appUrl}
                  title={shareMessage}
                  className="flex flex-col items-center"
                >
                  <WhatsappIcon size={48} round />
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                    WhatsApp
                  </span>
                </WhatsappShareButton>
              </motion.div>
            </motion.div>

            {/* Copy Message Button */}
            <motion.button
              onClick={handleCopyMessage}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-3 w-full transition-colors relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCopy className="text-lg" />
              Copy Message
              {copySuccess && (
                <motion.span
                  className="absolute right-4 text-green-400 text-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  ✓ Copied!
                </motion.span>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
