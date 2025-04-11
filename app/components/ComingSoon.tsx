"use client";

import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [mounted, setMounted] = useState(false);

  // Only render the theme-dependent content when mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Container with theme colors */}
      <div className="max-w-3xl w-full bg-gray-100/80 dark:bg-black/5 backdrop-blur-xl rounded-[30px] p-8 md:p-12 relative z-10 border border-gray-300 dark:border-white/10 shadow-lg container-float">
        <div className="flex flex-col items-center gap-10 text-center relative">
          {/* Icon container */}
          <div className="relative w-32 h-32 bg-gray-200/80 dark:bg-black/10 rounded-full flex items-center justify-center shadow-xl icon-rotate">
            <svg className="w-16 h-16 text-primaryColor icon-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="8" rx="1"></rect>
              <path d="M17 14v7"></path>
              <path d="M7 14v7"></path>
              <path d="M17 3v3"></path>
              <path d="M7 3v3"></path>
              <path d="M10 14 2.3 6.3"></path>
              <path d="m14 6 7.7 7.7"></path>
              <path d="m8 6 8 8"></path>
            </svg>
            
            {/* Timer badge */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full flex items-center justify-center shadow-lg pulse-animation">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>

          {/* Title with gradient */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-secondaryColor shimmer-container">
            Coming Soon
          </h1>

          {/* Description */}
          <p className="text-xl max-w-lg text-gray-800 dark:text-gray-300 leading-[1.8]">
            We&apos;re working hard to bring you amazing interview preparation resources. This feature is currently under development.
          </p>

          {/* Launch info */}
          <div className="flex items-center gap-4 px-8 py-4 bg-gray-200/70 dark:bg-black/10 rounded-full shadow-md relative overflow-hidden launch-info">
            <svg className="w-8 h-8 text-primaryColor rocket-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            <span className="text-gray-800 dark:text-gray-300">Expected Launch: Q2 2024</span>
          </div>

          {/* Progress container */}
          <div className="w-full max-w-2xl bg-gray-200/70 dark:bg-black/5 rounded-[20px] p-6 md:p-8 shadow-md border border-gray-300 dark:border-white/10 relative overflow-hidden progress-container">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full shadow-lg status-pulse"></div>
                <span className="text-gray-800 dark:text-gray-300">Development in Progress</span>
              </div>
              <div className="text-gray-800 dark:text-gray-300">50% Complete</div>
            </div>
            
            <div className="w-full h-3 bg-gray-300 dark:bg-black/10 rounded-full overflow-hidden relative z-10">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor relative"
                style={{ width: '50%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent progress-shine"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes containerFloat {
          0%, 100% { transform: translateZ(0) translateY(0); }
          50% { transform: translateZ(20px) translateY(-10px); }
        }
        
        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0.5; transform: translateX(-100%); }
          100% { opacity: 0; transform: translateX(100%); }
        }
        
        @keyframes rocketPulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes statusPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 15px rgba(244, 123, 32, 0.7); }
          50% { opacity: 0.6; box-shadow: 0 0 25px rgba(244, 123, 32, 1); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .container-float {
          box-shadow: 
            0 10px 20px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05),
            inset 0 0 20px rgba(0, 0, 0, 0.03);
          animation: containerFloat 8s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .container-float::before,
        .container-float::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 30px;
          padding: 1px;
          background: linear-gradient(
            45deg,
            rgba(244, 123, 32, 0.1),
            rgba(244, 123, 32, 0.05),
            rgba(244, 123, 32, 0.1)
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          pointer-events: none;
        }
        
        .icon-rotate {
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 0 20px rgba(0, 0, 0, 0.05);
          animation: iconRotate 20s linear infinite;
        }
        
        .icon-rotate::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid rgba(244, 123, 32, 0.1);
          animation: pulseRing 3s linear infinite;
        }
        
        .icon-float {
          filter: drop-shadow(0 0 8px rgba(244, 123, 32, 0.3));
          animation: iconFloat 3s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
          box-shadow: 0 4px 15px rgba(244, 123, 32, 0.5);
        }
        
        .shimmer-container {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          position: relative;
          letter-spacing: -0.02em;
        }
        
        .shimmer-container::after {
          content: 'Coming Soon';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent 40%, #f47b20);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: blur(8px);
          opacity: 0.5;
          animation: shimmer 5s infinite;
        }
        
        .launch-info {
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.1),
            inset 0 0 20px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .launch-info::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(244, 123, 32, 0.1) 0%,
            transparent 70%
          );
          animation: rotate 10s linear infinite;
        }
        
        .rocket-pulse {
          animation: rocketPulse 2s infinite;
          filter: drop-shadow(0 0 8px rgba(244, 123, 32, 0.3));
        }
        
        .progress-container {
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 0 20px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .progress-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(244, 123, 32, 0.2) 0deg,
            rgba(244, 123, 32, 0.15) 55deg,
            rgba(244, 123, 32, 0.1) 120deg,
            rgba(244, 123, 32, 0.05) 160deg,
            transparent 360deg
          );
          animation: rotate 10s linear infinite;
          opacity: 0.2;
        }
        
        .status-pulse {
          animation: statusPulse 2s infinite;
        }
        
        .progress-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon; 