import React, { createContext, useContext, useState, useEffect } from "react";

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [downloads, setDownloads] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    fetchAllDownloadCounts();
  }, []);

  const fetchAllDownloadCounts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/totaldownloads`
      );
      if (response.ok) {
        const data = await response.json();
        if (data && typeof data === 'object') {
          setDownloads(data);
        }
      }
    } catch (error) {
      console.error("Error fetching download counts:", error);
    }
  };

  const fetchDownloadCount = async (appId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/totaldownloads/${appId}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data && typeof data.totalDownloadCount === 'number') {
          setDownloads(prev => ({
            ...prev,
            [appId]: data.totalDownloadCount
          }));
        }
      }
    } catch (error) {
      console.error(`Error fetching download count for ${appId}:`, error);
    }
  };

  const handleDownload = async (appId) => {
    if (loading[appId]) return;

    setLoading(prev => ({ ...prev, [appId]: true }));

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/totaldownloads/${appId}`, {
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

        if (data && typeof data.totalDownloadCount === 'number') {
          setTimeout(() => {
            setDownloads(prev => ({
              ...prev,
              [appId]: data.totalDownloadCount
            }));
          }, 2000);
        } else {
          setTimeout(async () => {
            await fetchDownloadCount(appId);
          }, 1000);
        }
      } else {
        console.error("Download tracking failed, refreshing count");
        setTimeout(async () => {
          await fetchDownloadCount(appId);
        }, 1000);
      }

    } catch (error) {
      console.error("Error tracking download:", error);
      setTimeout(async () => {
        try {
          await fetchDownloadCount(appId);
        } catch (refreshError) {
          console.error("Error refreshing download count:", refreshError);
        }
      }, 1000);
    } finally {
      setLoading(prev => ({ ...prev, [appId]: false }));
    }
  };

  const value = {
    downloads,
    handleDownload,
    loading,
    refreshDownloadCount: fetchAllDownloadCounts,
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
