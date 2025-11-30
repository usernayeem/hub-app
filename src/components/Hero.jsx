import React from "react";
import { AppCard } from "./AppCard";
import { getAllApps } from "../data/appsData";

export const Hero = () => {
  const apps = getAllApps();

  return (
    <div className="w-full py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
            Hamdard University Bangladesh
            <span className="text-gray-900 dark:text-white block mt-2">
              Softwares Hub
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Download official applications for Hamdard University Bangladesh. Access your university portal, manage library resources, and stay connected with campus life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
