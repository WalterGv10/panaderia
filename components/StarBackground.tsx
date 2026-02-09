'use client';

import { useEffect, useState } from 'react';

export default function StarBackground() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const starCount = 150;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      <div className="glow-arc" />
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
          } as any}
        />
      ))}
    </div>
  );
}
