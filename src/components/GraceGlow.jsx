import React, { useState, useCallback } from "react";

export default function GraceGlow({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-10"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(193,154,107,0.12), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {children}
    </div>
  );
}