
import React, { useEffect, useState, useCallback } from 'react';
import anime from 'animejs';

export const BackgroundAnimation: React.FC = () => {
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  const calculateGrid = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Aim for boxes around 40px-60px depending on screen size
    // optimize for mobile by increasing box size (fewer elements)
    const boxSize = width < 768 ? 100 : 60; // Increased from 50 to 100 for mobile
    const cols = Math.ceil(width / boxSize);
    const rows = Math.ceil(height / boxSize);
    setGridSize({ cols, rows });
  }, []);

  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, [calculateGrid]);

  useEffect(() => {
    if (gridSize.cols > 0 && gridSize.rows > 0) {
      // Fix: anime is imported as a module in some TS configurations, so we cast to any to ensure it is callable
      const animeCall = anime as any;
      animeCall({
        targets: '.stagger-box',
        scale: [
          { value: 0.1, easing: 'easeOutSine', duration: 800 },
          { value: 1, easing: 'easeInOutQuad', duration: 2500 }
        ],
        background: [
          { value: '#1a103c', easing: 'easeOutSine', duration: 800 },
          { value: '#8b5cf6', easing: 'easeInOutQuad', duration: 2500 }
        ],
        delay: animeCall.stagger(80, {
          grid: [gridSize.cols, gridSize.rows],
          from: 'center'
        }),
        loop: true,
        direction: 'alternate'
      });
    }
  }, [gridSize]);

  const totalItems = gridSize.cols * gridSize.rows;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20 overflow-hidden bg-black">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalItems }).map((_, i) => (
          <div
            key={i}
            className="stagger-box w-full h-full border border-white/[0.02]"
            style={{ backgroundColor: '#1a103c' }}
          ></div>
        ))}
      </div>
    </div>
  );
};
