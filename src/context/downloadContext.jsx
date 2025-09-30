import React, { createContext, useContext, useState, useEffect } from "react";

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [downloads, setDownloads] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch initial download count
  useEffect(() => {
    fetchDownloadCount();
  }, []);

  const fetchDownloadCount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/totaldownloads`
      );
      if (response.ok) {
        const data = await response.json();
        // Ensure we have a valid number before setting
        if (data && typeof data.totalDownloadCount === 'number') {
          setDownloads(data.totalDownloadCount);
        }
      }
    } catch (error) {
      console.error("Error fetching download count:", error);
    }
  };

  const handleDownload = async () => {
    if (loading) return; // Prevent multiple simultaneous requests

    setLoading(true);
    try {
      // Send POST request to track download
      const response = await fetch(`${import.meta.env.VITE_API}/totaldownloads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Only update count if we get a valid response with totalDownloadCount
        if (data && typeof data.totalDownloadCount === 'number') {
          // Add 1-second delay before updating the download count
          setTimeout(() => {
            setDownloads(data.totalDownloadCount);
          }, 2000);
        } else {
          // If response doesn't have valid count, refresh from server after 1 second
          setTimeout(async () => {
            await fetchDownloadCount();
          }, 1000);
        }
      } else {
        // If response is not ok, refresh count from server after 1 second
        console.error("Download tracking failed, refreshing count");
        setTimeout(async () => {
          await fetchDownloadCount();
        }, 1000);
      }
      
    } catch (error) {
      console.error("Error tracking download:", error);
      // On error, try to refresh the count from server after 1 second
      setTimeout(async () => {
        try {
          await fetchDownloadCount();
        } catch (refreshError) {
          console.error("Error refreshing download count:", refreshError);
          // Keep the existing count if refresh also fails
        }
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    downloads,
    handleDownload,
    loading,
    refreshDownloadCount: fetchDownloadCount,
  };

  return (
    <DownloadContext.Provider value={value}>
      {children}
    </DownloadContext.Provider>
  );
};

export const useDownloadContext = () => {
  const context = useContext(DownloadContext);
  if (!context) {
    throw new Error(
      "useDownloadContext must be used within a DownloadProvider"
    );
  }
  return context;
};