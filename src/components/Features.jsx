import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaRocket, FaBell, FaMobile, FaGlobe } from "react-icons/fa";

export const Features = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const leftFeatures = [
    {
      icon: <FaRocket className="text-blue-600 dark:text-blue-400 text-xl" />,
      title: "Easy Access",
      description:
        "Quick and simple access to university web portal through webview",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
    },
    {
      icon: <FaBell className="text-purple-600 dark:text-purple-400 text-xl" />,
      title: "Easy Navigation",
      description:
        "Intuitive interface design for effortless navigation through the app",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
    },
  ];

  const rightFeatures = [
    {
      icon: (
        <FaMobile className="text-orange-600 dark:text-orange-400 text-xl" />
      ),
      title: "Mobile Optimized",
      description:
        "Perfectly designed and optimized for mobile devices and touch interface",
      bgColor: "bg-orange-100 dark:bg-orange-900/50",
    },
    {
      icon: <FaGlobe className="text-green-600 dark:text-green-400 text-xl" />,
      title: "WebView App",
      description:
        "Direct access to university website through integrated webview browser",
      bgColor: "bg-green-100 dark:bg-green-900/50",
    },
  ];

  // Check if component is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  // Trigger animation when in view or on mount
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

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

  const featureVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rightFeatureVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mockupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-16 lg:text-right order-2 lg:order-1">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                  <motion.div
                    className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      className="font-semibold text-gray-900 dark:text-white text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
                {/* Connection line for desktop */}
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-16 w-12 h-0.5 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-500 dark:to-green-300 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>

          {/* Center Mockup */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div
              className="relative mx-auto max-w-xs"
              variants={mockupVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="/images/mockup.webp"
                alt="Hamdard University Bangladesh Mobile App Mockup"
                className="drop-shadow-lg"
                initial={{ rotateY: -10 }}
                animate={isInView ? { rotateY: 0 } : { rotateY: -10 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Right Features */}
          <div className="space-y-16 order-3">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={rightFeatureVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      className="font-semibold text-gray-900 dark:text-white text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
                {/* Connection line for desktop */}
                <motion.div
                  className="hidden lg:block absolute top-1/2 -left-16 w-12 h-0.5 bg-gradient-to-l from-green-600 to-green-400 dark:from-green-500 dark:to-green-300 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
