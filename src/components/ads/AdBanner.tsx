"use client";

import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined" && adContainerRef.current) {
      // Clear existing content just in case of re-renders
      adContainerRef.current.innerHTML = "";

      const scriptConfig = document.createElement("script");
      scriptConfig.type = "text/javascript";
      scriptConfig.innerHTML = `
        atOptions = {
          'key' : 'e9a269b1110f7f5137c2d8fe16385380',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

      const scriptInvoke = document.createElement("script");
      scriptInvoke.type = "text/javascript";
      scriptInvoke.src = "https://www.highperformanceformat.com/e9a269b1110f7f5137c2d8fe16385380/invoke.js";

      adContainerRef.current.appendChild(scriptConfig);
      adContainerRef.current.appendChild(scriptInvoke);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Advertisement</span>
      <div 
        ref={adContainerRef} 
        className="w-[300px] h-[250px] bg-gray-50/50 flex items-center justify-center border border-gray-100 rounded-lg overflow-hidden"
      >
        {/* Adsterra ad will be injected here */}
      </div>
    </div>
  );
}
