import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

const Cursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const delay = 0.1; // Animation delay
    const offsetDistance = 30; // Distance ahead of cursor

    let lastMouseX = 0, lastMouseY = 0;

    const animate = () => {
      // Direction vector
      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;

      // Normalized direction
      const offsetX = (dx / len) * offsetDistance;
      const offsetY = (dy / len) * offsetDistance;

      // Target with offset
      const targetX = mouseX + offsetX;
      const targetY = mouseY + offsetY;

      // Smooth animation
      currentX += (targetX - currentX) * delay;
      currentY += (targetY - currentY) * delay;

      // Apply transform
      circle.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Save last positions
      lastMouseX = mouseX;
      lastMouseY = mouseY;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor-circle" ref={circleRef}></div>;
};

export default Cursor;
