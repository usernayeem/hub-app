import React, { useState } from "react";
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

export const AppCard = ({ app, index }) => {
  const { downloads, handleDownload, loading } = useDownloadContext();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const appUrl = window.location.href;
  const shareMessage = `🎓 Check out ${app.name} for Hamdard University Bangladesh! ${app.description.substring(0, 100)}... Download from: ${appUrl}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: app.name,
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

  const currentDownloads = downloads[app.id] || 0;
  const isCurrentLoading = loading[app.id] || false;

  const getPrimaryColorClasses = (color) => {
    const colors = {
      green: {
        text: "text-green-600 dark:text-green-400",
        bg: "bg-green-600 hover:bg-green-700",
      },
      blue: {
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-600 hover:bg-purple-700",
      },
      orange: {
        text: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-600 hover:bg-orange-700",
      },
    };
    return colors[color] || colors.green;
  };

  const colorClasses = getPrimaryColorClasses(app.primaryColor);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-2xl drop-shadow-lg hover:scale-110 hover:rotate-6 transition-transform duration-300">
            <img
              src={app.icon}
              loading="lazy"
              alt={`${app.name} Logo`}
              className="rounded drop-shadow-lg"
            />
          </div>

          <div className="mb-4">
            <span className={`${colorClasses.text} font-semibold text-lg`}>
              {currentDownloads}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-1 text-sm">
              {currentDownloads === 0
                ? "Downloads"
                : currentDownloads === 1
                ? "Download"
                : "Downloads"}
            </span>
          </div>

          <h3 className={`text-2xl font-bold ${colorClasses.text} mb-2`}>
            {app.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {app.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              onClick={() => handleDownload(app.id)}
              href={app.downloadLink}
              download={app.apkFileName}
              className={`${colorClasses.bg} text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 flex-1 hover:scale-105 active:scale-95 ${
                isCurrentLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              <div className={isCurrentLoading ? "animate-spin" : ""}>
                <FaAndroid className="text-lg" />
              </div>
              {isCurrentLoading ? "Downloading..." : "Download"}
            </a>

            <button
              onClick={handleShare}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 flex-1 hover:scale-105 active:scale-95"
            >
              <FaShare className="text-lg" />
              Share
            </button>
          </div>
        </div>
      </div>

      {showShareModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Share {app.name}
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:scale-110 hover:rotate-90 transition-transform duration-200"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300">
              {shareMessage}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="hover:scale-110 transition-transform duration-200">
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
              </div>

              <div className="hover:scale-110 transition-transform duration-200">
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
              </div>

              <div className="hover:scale-110 transition-transform duration-200">
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
              </div>
            </div>

            <button
              onClick={handleCopyMessage}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-3 w-full transition-all duration-300 relative hover:scale-105 active:scale-95"
            >
              <FaCopy className="text-lg" />
              Copy Message
              {copySuccess && (
                <span className="absolute right-4 text-green-400 text-sm">
                  ✓ Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
