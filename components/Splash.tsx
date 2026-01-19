
import React, { useEffect, useState } from 'react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 border border-podPurple rounded-full animate-ping opacity-20 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-5xl text-white font-black tracking-tighter">PM</span>
          </div>
        </div>
        <h1 className="text-2xl tracking-[0.4em] text-white font-black animate-slide-up">
          PODMARK
        </h1>
        <div className="mt-4 flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-podPurple animate-pulse"></div>
          <div className="w-2 h-2 bg-podCyan animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};
