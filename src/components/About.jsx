import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const profileImageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
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

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="bg-green-600 dark:bg-green-700 py-8"
        variants={headerVariants}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white hover:text-green-100 transition-colors mb-4"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                <FaArrowLeft />
              </motion.div>
              Back to Home
            </Link>
          </motion.div>
          <motion.h1
            className="text-3xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About This App
          </motion.h1>
          <motion.p
            className="text-green-100 mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Everything you need to know about the HUB Mobile App
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12"
        variants={containerVariants}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* What This App Does */}
          <motion.h3
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            variants={itemVariants}
            whileInView={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            📱 What Does This App Do?
          </motion.h3>
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8"
            variants={cardVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.ul
              className="space-y-3 text-gray-700 dark:text-gray-300"
              variants={containerVariants}
            >
              {[
                "Opens the official HUB website in a mobile-friendly way",
                "Makes it easier to check grades, schedules, and announcements on your phone",
                "Works exactly like the website - no tricks, no ads, no nonsense",
                "Completely free - no hidden costs or subscriptions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={listItemVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    className="text-blue-600 dark:text-blue-400 text-xl"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    ✓
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Is It Safe? */}
          <motion.h3
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            🔒 Is It Safe?
          </motion.h3>
          <motion.div
            className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-8"
            variants={cardVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-4 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Absolutely!</strong> Here's why you can trust this app:
            </motion.p>
            <motion.ul
              className="space-y-3 text-gray-700 dark:text-gray-300"
              variants={containerVariants}
            >
              {[
                {
                  icon: "🛡️",
                  text: "Your passwords and personal info stay between you and the university website",
                },
                {
                  icon: "👀",
                  text: "It's a webview app that's more like a browser app that only loads the official website of the university within the app",
                },
                { icon: "💾", text: "Nothing is saved or stored by the app" },
                {
                  icon: "🏛️",
                  text: "You're still using the official university website, just in a mobile app",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={listItemVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    className="text-green-600 dark:text-green-400 text-xl"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* About the Developer */}
          <motion.h3
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            💻 Who Developed This App?
          </motion.h3>
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8"
            variants={cardVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="w-16 h-16 rounded-full overflow-hidden"
                variants={profileImageVariants}
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <img
                  src="https://i.ibb.co/KxyFtNwk/A-confident-young-ma.webp"
                  loading="lazy"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Md Nayeem
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  BA (English Dept.) student at Hamdard University Bangladesh
                </p>
                <motion.p
                  className="text-sm text-green-600 dark:text-green-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Full Stack Developer
                </motion.p>
              </motion.div>
            </div>
            <motion.p
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a student who cares about making student life easier. I
              realized that having our university website as a webview app would
              be much more convenient than opening browsers every time. It's my
              way of contributing to our amazing university community and giving
              everyone quicker, one-tap access to the university website. 🎓
            </motion.p>
          </motion.div>

          {/* Important Notice */}
          <motion.h3
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            📋 Important Things to Know
          </motion.h3>
          <motion.div
            className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-8"
            variants={cardVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.ul
              className="space-y-3 text-gray-700 dark:text-gray-300"
              variants={containerVariants}
            >
              {[
                {
                  icon: "⚠️",
                  text: "This is a student project - not an official university app",
                },
                {
                  icon: "🏛️",
                  text: "The university didn't ask me to make this (but I hope they like it!)",
                },
                {
                  icon: "📞",
                  text: "For official university questions, contact the university directly",
                },
                {
                  icon: "💬",
                  text: "For app related questions or suggestions, ask HUB-GPT",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={listItemVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    className="text-yellow-600 dark:text-yellow-400 text-xl"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>
                    {item.text.includes("student project") ? (
                      <>
                        This is a <strong>student project</strong> - not an
                        official university app
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Questions or Problems */}
          <motion.h3
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            🤝 Questions or Problems?
          </motion.h3>
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8"
            variants={cardVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm here to help! If you have any questions, suggestions, or run
              into problems:
            </motion.p>
            <motion.div className="space-y-3" variants={containerVariants}>
              <motion.a
                href="mailto:mdnayeem14916@gmail.com"
                className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                variants={listItemVariants}
                whileInView="visible"
                whileHover={{ scale: 1.02, x: 10 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="text-xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  📧
                </motion.span>
                <span className="font-medium">
                  Email me: mdnayeem14916@gmail.com
                </span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/md.nayeem.2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                variants={listItemVariants}
                whileInView="visible"
                whileHover={{ scale: 1.02, x: 10 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="text-xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  📱
                </motion.span>
                <span className="font-medium">Message me on Facebook</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
