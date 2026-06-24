import React, { useEffect, useState } from 'react';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Glow Dot */}
      <div
        className="fixed pointer-events-none z-50 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: '0 0 15px var(--color-primary), 0 0 30px var(--color-primary)',
        }}
      />
      {/* Outer Floating Aura */}
      <div
        className="fixed pointer-events-none z-40 w-80 h-80 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-25"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          background: 'radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 50%, transparent 100%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
